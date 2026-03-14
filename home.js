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

    // Handle Modal Open/Close Logic
    const modalOverlay = document.getElementById('projectOptionsOverlay');
    const bottomSheet = document.getElementById('projectOptionsSheet');
    const closeSheetBtn = document.getElementById('closeSheetBtn');
    const sheetProjectTitle = document.getElementById('sheetProjectTitle');
    const sheetOptionsView = document.getElementById('sheetOptionsView');
    const sheetDetailView = document.getElementById('sheetDetailView');
    const sheetBackBtn = document.getElementById('sheetBackBtn');
    const sheetDetailTitle = document.getElementById('sheetDetailTitle');
    const sheetDetailList = document.getElementById('sheetDetailList');

    function resetSheetView() {
        if(sheetOptionsView) sheetOptionsView.style.display = 'block';
        if(sheetDetailView) sheetDetailView.style.display = 'none';
        if(sheetDetailList) sheetDetailList.innerHTML = '';
    }

    // Function to open modal
    function openProjectOptions(projectName) {
        if (sheetProjectTitle) {
            sheetProjectTitle.textContent = projectName;
        }

        // Extract project ID
        const projectIdMatch = projectName.match(/^(\d+)\./);
        if(projectIdMatch && bottomSheet) {
            bottomSheet.dataset.projectId = projectIdMatch[1];
        }

        if (modalOverlay) modalOverlay.classList.add('active');
        if (bottomSheet) bottomSheet.classList.add('active');
        
        resetSheetView();

        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeProjectOptions() {
        if (modalOverlay) modalOverlay.classList.remove('active');
        if (bottomSheet) bottomSheet.classList.remove('active');
        
        resetSheetView();

        // Restore body scroll
        document.body.style.overflow = '';
    }

    // Event delegation for opening modal (works for initial and dynamically loaded projects)
    document.addEventListener('click', (e) => {
        const target = e.target;
        // Check if the clicked element is a .btn-small (the Open button) inside a project card
        if (target.classList.contains('btn-small') && target.closest('.project-card')) {
            const projectCard = target.closest('.project-card');
            const projectTitleEl = projectCard.querySelector('h4');
            const projectName = projectTitleEl ? projectTitleEl.textContent : 'Project Details';
            
            openProjectOptions(projectName);
        }
    });

    // Event listeners to close modal
    if (closeSheetBtn) {
        closeSheetBtn.addEventListener('click', closeProjectOptions);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectOptions);
    }

    // Initialize option buttons inside the bottom sheet with ripple effect
    const sheetOptions = document.querySelectorAll('.sheet-option-btn');
    sheetOptions.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripples = document.createElement('span');
            ripples.style.cssText = `
                left: ${x}px;
                top: ${y}px;
                position: absolute;
                background: rgba(34, 211, 238, 0.3);
                width: 100px;
                height: 100px;
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            if (window.getComputedStyle(this).position === 'static') {
                this.style.position = 'relative';
            }
            this.style.overflow = 'hidden';
            this.appendChild(ripples);
            
            setTimeout(() => {
                ripples.remove();
                const optionName = this.querySelector('h4').textContent;
                console.log(`Option clicked: ${optionName}`);

                if (optionName === 'Syllabus' || optionName === 'Tools') {
                    showProjectDetails(optionName);
                } else if (optionName === 'Design') {
                    if (sheetDetailTitle) sheetDetailTitle.textContent = 'Design';
                    
                    const projectId = bottomSheet?.dataset?.projectId;
                    const project = window.projectsData?.[projectId];
                    
                    if (sheetDetailList) {
                        if (project && project.design) {
                            sheetDetailList.innerHTML = `
                                <div style="width: 100%; padding: 10px 0; display: flex; flex-direction: column; align-items: center; gap: 15px;">
                                    <div style="width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; border: 1px solid var(--card-border); background: #000; display: flex; align-items: center; justify-content: center;">
                                        <img src="${project.design}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;" alt="Project Design">
                                    </div>
                                    <p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; line-height: 1.4;">Project blueprint containing circuit connections and 3D design layout.</p>
                                </div>`;
                        } else {
                            sheetDetailList.innerHTML = '<li style="color: var(--text-muted); padding: 20px 0; text-align: center;">Design data coming soon for this project.</li>';
                        }
                    }
                    
                    if (sheetOptionsView) sheetOptionsView.style.display = 'none';
                    if (sheetDetailView) sheetDetailView.style.display = 'block';
                }
            }, 600);
        });
    });

    function showProjectDetails(type) {
        const projectId = bottomSheet?.dataset?.projectId;
        if (!projectId || !window.projectsData || !window.projectsData[projectId]) {
            if (sheetDetailTitle) sheetDetailTitle.textContent = type;
            if (sheetDetailList) sheetDetailList.innerHTML = '<li style="color: var(--text-muted); padding: 10px 0;">Data not available for this project.</li>';
        } else {
            const data = window.projectsData[projectId];
            if (sheetDetailTitle) sheetDetailTitle.textContent = type;
            if (sheetDetailList) sheetDetailList.innerHTML = '';
            
            const listData = type === 'Syllabus' ? data.syllabus : data.tools;
            
            if (listData && listData.length > 0) {
                listData.forEach(item => {
                    const li = document.createElement('li');
                    li.style.cssText = 'padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); position: relative; padding-left: 24px; color: var(--text-light); line-height: 1.5; font-size: 0.95rem;';
                    li.innerHTML = `<span style="position: absolute; left: 0; top: 16px; width: 8px; height: 8px; background: var(--primary-light); border-radius: 50%;"></span>${item}`;
                    if(sheetDetailList) sheetDetailList.appendChild(li);
                });
            } else {
                if(sheetDetailList) sheetDetailList.innerHTML = '<li style="color: var(--text-muted); padding: 10px 0;">No data found.</li>';
            }
        }
        
        if (sheetOptionsView) sheetOptionsView.style.display = 'none';
        if (sheetDetailView) sheetDetailView.style.display = 'block';
    }

    if (sheetBackBtn) {
        sheetBackBtn.addEventListener('click', () => {
            resetSheetView();
        });
    }

    // Handle "See All Projects" button to load all projects dynamically without navigating away
    const seeAllBtn = document.querySelector('.see-all');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', async (e) => {
            // Only intercept if we are on the home page (where .horizontal-scroll exists)
            const projectsContainer = document.querySelector('.horizontal-scroll');
            if (projectsContainer) {
                e.preventDefault(); // Stop navigation
                
                // Show a loading state on the button
                const originalText = seeAllBtn.textContent;
                seeAllBtn.textContent = "Loading...";
                seeAllBtn.style.pointerEvents = "none";
                
                try {
                    // Fetch the projects.html content
                    const response = await fetch('projects.html');
                    const htmlText = await response.text();
                    
                    // Parse the HTML
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlText, 'text/html');
                    
                    // Extract all project cards
                    const allProjects = doc.querySelectorAll('.projects-list .project-card');
                    
                    if (allProjects.length > 0) {
                        // Clear the current horizontal container and change to vertical list
                        projectsContainer.innerHTML = '';
                        projectsContainer.className = 'projects-list'; // Apply vertical layout class
                        
                        // Append all projects to the container
                        allProjects.forEach(card => {
                            // Ensure the card has proper styling hooks if needed, but the HTML should be identical
                            projectsContainer.appendChild(card);
                        });
                        
                        // Re-initialize button ripple effects for new buttons
                        const newButtons = projectsContainer.querySelectorAll('.btn-small');
                        newButtons.forEach(btn => {
                            btn.addEventListener('click', function(evt) {
                                // Add ripple effect code for new buttons
                                let x = evt.clientX - evt.target.getBoundingClientRect().left;
                                let y = evt.clientY - evt.target.getBoundingClientRect().top;
                    
                                let ripples = document.createElement('span');
                                ripples.style.cssText = `
                                    left: ${x}px;
                                    top: ${y}px;
                                    position: absolute;
                                    background: rgba(255, 255, 255, 0.3);
                                    width: 100px;
                                    height: 100px;
                                    border-radius: 50%;
                                    transform: translate(-50%, -50%) scale(0);
                                    animation: ripple 0.6s linear;
                                    pointer-events: none;
                                `;
                                if (window.getComputedStyle(this).position === 'static') {
                                    this.style.position = 'relative';
                                }
                                this.style.overflow = 'hidden';
                                this.appendChild(ripples);
                                setTimeout(() => ripples.remove(), 600);
                            });
                        });

                        // Optionally update section title and remove "See All" button
                        const sectionTitle = document.querySelector('.section-header .section-title');
                        if (sectionTitle) {
                            sectionTitle.textContent = "All Projects (" + allProjects.length + ")";
                        }
                        seeAllBtn.remove(); // Remove button since all are loaded
                    } else {
                        throw new Error("No projects found in projects.html");
                    }
                } catch (error) {
                    console.error("Failed to load projects:", error);
                    seeAllBtn.textContent = "Error loading";
                    setTimeout(() => {
                        seeAllBtn.textContent = originalText;
                        seeAllBtn.style.pointerEvents = "auto";
                    }, 2000);
                    // Fallback to regular navigation
                    window.location.href = 'projects.html';
                }
            }
        });
    }
});
