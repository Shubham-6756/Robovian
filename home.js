document.addEventListener('DOMContentLoaded', () => {
    // Load User Data
    const userNameElement = document.querySelector('.user-name');
    if (userNameElement) {
        const savedName = localStorage.getItem('robovian_user_name');
        const savedEmail = localStorage.getItem('robovian_user_email');

        if (savedName) {
            // Use the provided full name, extract first name
            const firstName = savedName.split(' ')[0];
            // Capitalize first letter
            const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
            userNameElement.textContent = capitalizedFirstName + '!';
        } else if (savedEmail) {
            // Fallback: Extract name from email (e.g., alex.smith@email.com -> Alex Smith)
            let namePart = savedEmail.split('@')[0];
            // Replace dots/underscores with spaces
            namePart = namePart.replace(/[._]/g, ' ');

            // Make user name title case
            const formattedName = namePart.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');

            // Use just the first name for the greeting if it's long, or full if short
            const firstName = formattedName.split(' ')[0];
            userNameElement.textContent = firstName + '!';
        }

        // Load Profile Avatar specific to the user (Using DiceBear Bottts for Robot Theme)
        const avatarEmail = savedEmail || 'guest@robovian.ai';
        const profileImg = document.querySelector('.profile-avatar img');
        if (profileImg) {
            // Generate a unique Robot avatar based on the user's email!
            profileImg.src = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(avatarEmail)}&backgroundColor=0B1020`;
        }
    }

    // Add scroll effect for top bar
    const topBar = document.querySelector('.top-bar');
    const contentScroll = document.querySelector('.content-scroll');

    if (contentScroll && topBar) {
        contentScroll.addEventListener('scroll', () => {
            if (contentScroll.scrollTop > 20) {
                topBar.style.background = 'rgba(11, 16, 32, 0.9)';
                topBar.style.backdropFilter = 'blur(10px)';
                topBar.style.borderBottom = '1px solid rgba(34, 211, 238, 0.1)';
            } else {
                topBar.style.background = 'linear-gradient(to bottom, var(--bg-dark) 60%, transparent)';
                topBar.style.backdropFilter = 'none';
                topBar.style.borderBottom = 'none';
            }
        });
    }

    // Add click ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .grid-card, .btn-small');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Prevent default link behavior for demo purposes if it's a '#' link
            if (this.tagName === 'A' && this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.style.position = 'absolute';
            ripples.style.background = 'rgba(255, 255, 255, 0.3)';
            ripples.style.width = '100px';
            ripples.style.height = '100px';
            ripples.style.borderRadius = '50%';
            ripples.style.transform = 'translate(-50%, -50%) scale(0)';
            ripples.style.animation = 'ripple 0.6s linear';
            ripples.style.pointerEvents = 'none';

            // Only add relative positioning if the element doesn't already have a positioned context
            const currentPosition = window.getComputedStyle(this).position;
            if (currentPosition === 'static') {
                this.style.position = 'relative';
            }
            this.style.overflow = 'hidden';

            this.appendChild(ripples);

            // Required animation keyframes injected via JS since it's dynamic
            if (!document.getElementById('ripple-animation')) {
                const style = document.createElement('style');
                style.id = 'ripple-animation';
                style.innerHTML = `
                    @keyframes ripple {
                        to {
                            transform: translate(-50%, -50%) scale(3);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            setTimeout(() => {
                ripples.remove();
            }, 600);
        });
    });

    // Handle horizontal scroll grabbing (for mouse users)
    const sliders = document.querySelectorAll('.horizontal-scroll, .categories-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliders.forEach(slider => {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'auto';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'auto';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    });

    // Progress bar animation on load
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const targetWidth = progressFill.style.width;
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.transition = 'width 1.5s cubic-bezier(0.1, 0.7, 1.0, 0.1)';
            progressFill.style.width = targetWidth;
        }, 500);
    }

    // Bottom Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.getAttribute('href') === '#') {
                e.preventDefault();
            }
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
