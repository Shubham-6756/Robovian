// Basic Javascript for RoboGenie Interactions

function setPrompt(text) {
    window.location.href = `robogenie-chat.html?prompt=${encodeURIComponent(text)}`;
}

function startChat() {
    const aiInput = document.getElementById('ai-prompt-input');
    const val = aiInput ? aiInput.value.trim() : '';
    if (val) {
        window.location.href = `robogenie-chat.html?prompt=${encodeURIComponent(val)}`;
    } else {
        window.location.href = `robogenie-chat.html`;
    }
}

function switchTab(clickedTab, tabName) {
    // 1. Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab-btn');
    allTabs.forEach(tab => tab.classList.remove('active'));

    // 2. Add active class to clicked tab
    clickedTab.classList.add('active');

    // Currently we just log the tab filter to console, 
    // In actual implementation this would filter the features list below.
    console.log(`Switched to tab: ${tabName}`);
}

// Add simple alert to all Send buttons for demo
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.querySelector('.send-btn');
    const aiInput = document.getElementById('ai-prompt-input');

    if (sendBtn && aiInput) {
        sendBtn.addEventListener('click', () => {
            const val = aiInput.value.trim();
            if (val) {
                window.location.href = `robogenie-chat.html?prompt=${encodeURIComponent(val)}`;
            }
        });

        // Handle enter key
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
    }
});
