// Logic for RoboGenie Chat

const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');
const inputWrapper = document.querySelector('.chat-input-wrapper');

// Create the error label dynamically
const errorLabel = document.createElement('div');
errorLabel.className = 'error-text';
errorLabel.textContent = 'Please enter a question first.';
inputWrapper.appendChild(errorLabel);

// Utility to fill input from chips or buttons
window.fillInput = function (text) {
    chatInput.value = text;
    chatInput.focus();
}

// Utility to scroll to latest message
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Render User Message Bubble
function appendUserMessage(text) {
    const msgHTML = `
        <div class="message-group user-message-group">
            <div class="message-bubble user-bubble">
                <span class="name-tag">You</span>
                <p>${escapeHTML(text)}</p>
            </div>
        </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', msgHTML);
    scrollToBottom();
}

// Render AI Loading State
function appendLoadingState() {
    const id = 'loading-' + Date.now();
    const msgHTML = `
        <div class="message-group ai-message-group" id="${id}">
            <img src="assets/robogenie_logo.png" class="chat-avatar" alt="AI">
            <div class="message-bubble ai-bubble glass-panel highlight-border typing-indicator">
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                RoboGenie is thinking...
            </div>
        </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', msgHTML);
    scrollToBottom();
    return id; // Return ID to remove it later
}

// Render Final AI Message with structured answers and buttons
function appendAIMessage(textObj, buttonsArray) {
    let contentHTML = `<div class="structured-content">`;

    // Core text
    contentHTML += `<p class="main-answer">${textObj.answer}</p>`;

    // Extra details (Real-life example, Use cases)
    if (textObj.extra) {
        contentHTML += `<div class="extra-info mt-3">${textObj.extra}</div>`;
    }

    // Uses cases / bullets if present
    if (textObj.bullets && textObj.bullets.length > 0) {
        contentHTML += `<ul class="mt-2">`;
        textObj.bullets.forEach(b => {
            contentHTML += `<li>${b}</li>`;
        });
        contentHTML += `</ul>`;
    }

    // Next Step if present
    if (textObj.nextStep) {
        contentHTML += `<div class="next-step-box mt-3">`;
        contentHTML += `<div class="next-step-title" style="font-size:11px; font-weight:700; color:var(--cyan); text-transform:uppercase; margin-bottom:4px;">Next Learning Step</div>`;
        contentHTML += `<p class="text-xs text-muted" style="font-size:12px; line-height:1.4;">${textObj.nextStep}</p>`;
        contentHTML += `</div>`;
    }

    contentHTML += `</div>`;

    // Smart Actions
    if (buttonsArray && buttonsArray.length > 0) {
        contentHTML += `<div class="smart-actions">`;
        buttonsArray.forEach(btnText => {
            contentHTML += `<button class="smart-btn" onclick="fillInput('${btnText}')">${btnText}</button>`;
        });
        contentHTML += `</div>`;
    }

    const msgHTML = `
        <div class="message-group ai-message-group">
            <img src="assets/robogenie_logo.png" class="chat-avatar" alt="AI">
            <div class="message-bubble ai-bubble glass-panel highlight-border">
                ${contentHTML}
            </div>
        </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', msgHTML);
    scrollToBottom();
}

// Show validation error
function showInputError() {
    errorLabel.classList.add('show');
    setTimeout(() => {
        errorLabel.classList.remove('show');
    }, 2000);
}

// Render Final AI Message with high-quality 5-part structure
function appendAIMessage(textObj, buttonsArray) {
    let contentHTML = `<div class="structured-content">`;

    // 1. Meaning (Simple Language)
    contentHTML += `<div class="content-section">
        <div class="section-label">Simplified Meaning</div>
        <p class="main-answer">${textObj.meaning || textObj.answer}</p>
    </div>`;

    // 2. How it works
    if (textObj.working) {
        contentHTML += `<div class="content-section mt-3">
            <div class="section-label">How it Works</div>
            <p class="text-xs text-main">${textObj.working}</p>
        </div>`;
    }

    // 3. Real-life Use
    if (textObj.usage) {
        contentHTML += `<div class="content-section mt-3">
            <div class="section-label">Real-life Usage</div>
            <p class="text-xs text-main">${textObj.usage}</p>
        </div>`;
    }

    // 4. Beginner Example
    if (textObj.example) {
        contentHTML += `<div class="content-section mt-3 highlight-box">
            <div class="section-label" style="color:var(--cyan)">Beginner Example</div>
            <p class="text-xs italic">${textObj.example}</p>
        </div>`;
    }

    // 5. Next Learning Step
    if (textObj.nextStep) {
        contentHTML += `<div class="next-step-box mt-3">
            <div class="next-step-title">NEXT LEARNING STEP</div>
            <p class="text-xs text-muted">${textObj.nextStep}</p>
        </div>`;
    }

    contentHTML += `</div>`;

    // Smart Actions
    if (buttonsArray && buttonsArray.length > 0) {
        contentHTML += `<div class="smart-actions">`;
        buttonsArray.forEach(btnText => {
            contentHTML += `<button class="smart-btn" onclick="fillInput('${btnText}')">${btnText}</button>`;
        });
        contentHTML += `</div>`;
    }

    const msgHTML = `
        <div class="message-group ai-message-group">
            <img src="assets/robogenie_logo.png" class="chat-avatar" alt="AI">
            <div class="message-bubble ai-bubble glass-panel highlight-border">
                ${contentHTML}
            </div>
        </div>
    `;
    chatMessages.insertAdjacentHTML('beforeend', msgHTML);
    scrollToBottom();
}

// Core Chat Flow
function handleSend() {
    const text = chatInput.value.trim();
    if (!text) {
        showInputError();
        return;
    }

    // 1. Process User Message
    chatInput.value = '';
    appendUserMessage(text);

    // 2. Show Loading
    const loadingId = appendLoadingState();

    // 3. Simulated Intelligence from robogenie-data.js
    setTimeout(() => {
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();
        
        const lowerText = text.toLowerCase();
        let matchedKey = null;

        // Smart keyword search in massive KB
        for (const key in robogenieKB) {
            if (lowerText.includes(key.toLowerCase())) {
                matchedKey = key;
                break;
            }
        }

        if (matchedKey) {
            const data = robogenieKB[matchedKey];
            appendAIMessage(data, ['Explain More', 'Next Topic', 'Show Code']);
        } else {
            // Smart Fallback behavior using external fallbacks array
            const fallbackMsg = robogenieFallbacks[Math.floor(Math.random() * robogenieFallbacks.length)];
            appendAIMessage({
                meaning: fallbackMsg,
                usage: "I can explain electronics, sensors, and coding basics to help you get started.",
                nextStep: "Try asking about 'Arduino' or 'Voltage' for a quick start."
            }, ['Arduino Basics', 'Sensor Wiring', 'Robot Projects']);
        }

    }, 1500);
}

// Check for URL parameters on load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialPrompt = urlParams.get('prompt');
    const context = urlParams.get('context');

    if (initialPrompt) {
        chatInput.value = initialPrompt;
    } else if (context) {
        chatInput.value = `Explain this to me: ${decodeURIComponent(context)}`;
        // Optional: auto-send
        // handleSend();
    }
});

// Event Listeners
sendBtn.addEventListener('click', handleSend);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSend();
    }
});

// Simple escape util to prevent basic injection
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
