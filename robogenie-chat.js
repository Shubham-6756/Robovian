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
    contentHTML += `<p>${textObj.answer}</p>`;

    // Uses cases / bullets if present
    if (textObj.bullets && textObj.bullets.length > 0) {
        contentHTML += `<ul>`;
        textObj.bullets.forEach(b => {
            contentHTML += `<li>${b}</li>`;
        });
        contentHTML += `</ul>`;
    }

    // Next Step if present
    if (textObj.nextStep) {
        contentHTML += `<div class="next-step-title">Next Step</div>`;
        contentHTML += `<p class="text-sm mt-1 mb-2 text-muted">${textObj.nextStep}</p>`;
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

    // 3. Simulate Backend Request
    const lowerText = text.toLowerCase();

    setTimeout(() => {
        // Remove loading state
        document.getElementById(loadingId).remove();

        // Hardcoded simulation responses based on prompt
        if (lowerText.includes('humanoid')) {
            appendAIMessage({
                answer: 'Humanoid robot ek aisa robot hota hai jo human body structure se inspired hota hai. Isme head, arms, legs, joints aur movement system ho sakta hai. Iska use research, assistance, automation aur interaction me hota hai.',
            }, ['Explain More', 'Show Examples', 'Give Project Idea', 'Start Learning']);

        } else if (lowerText.includes('arduino')) {
            appendAIMessage({
                answer: 'Arduino ek microcontroller board hai jo electronics aur robotics projects me use hota hai.',
                bullets: ['LED blinking', 'Sensor reading', 'Motor control', 'Robot projects'],
                nextStep: 'Do you want beginner Arduino projects or basic components list?'
            }, ['Beginner Projects', 'Components List', 'Explain More']);

        } else if (lowerText.includes('line follower')) {
            appendAIMessage({
                answer: 'Line follower robot banane ke liye Arduino, IR sensors, motor driver, DC motors, chassis, aur battery chahiye. Main aapko components, wiring, aur basic working step-by-step samjha sakta hoon.'
            }, ['Show Components', 'Show Wiring', 'Give Example Code']);

        } else {
            // Error fallback simulation / default
            appendAIMessage({
                answer: "I couldn't find a specific answer for that right now, but I'm ready to help you with electronics, coding, and AI.",
                nextStep: "Try one of these topics:"
            }, ['Arduino Basics', 'Sensor Wiring', 'Robot Chassis']);
        }

    }, 1500); // 1.5s simulated delay
}

// Check for URL prompt parameters on load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialPrompt = urlParams.get('prompt');

    if (initialPrompt) {
        // Auto-fill and optional auto-send
        chatInput.value = initialPrompt;

        // Optional: auto-send if desired, by uncommenting below
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
