document.addEventListener('DOMContentLoaded', () => {
    let currentLevel = 'beginner';
    let currentCategory = 'All';
    let activeLesson = null;
    let currentModalTab = 'learn';

    const lessonGrid = document.getElementById('lessonGrid');
    const levelBtns = document.querySelectorAll('.tab-btn');
    const catPills = document.querySelectorAll('.cat-pill');
    const searchInput = document.getElementById('lessonSearch');
    
    const modal = document.getElementById('lessonModal');
    const overlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalContent = document.getElementById('modalContent');
    const nextActionBtn = document.getElementById('nextActionBtn');
    const askGenieBtn = document.getElementById('askGenieBtn');

    // Initialize
    renderLessons();

    // Level Switching
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            levelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLevel = btn.dataset.level;
            renderLessons();
        });
    });

    // Category Switching
    catPills.forEach(pill => {
        pill.addEventListener('click', () => {
            catPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.category;
            renderLessons();
        });
    });

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        renderLessons(query);
    });

    function renderLessons(query = '') {
        lessonGrid.innerHTML = '';
        const lessons = learnData[currentLevel];
        
        const filtered = lessons.filter(l => {
            const matchesCat = currentCategory === 'All' || l.category.includes(currentCategory);
            const matchesQuery = l.title.toLowerCase().includes(query) || l.explanation.toLowerCase().includes(query);
            return matchesCat && matchesQuery;
        });

        if (filtered.length === 0) {
            lessonGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No lessons found in this category.</div>`;
            return;
        }

        filtered.forEach(lesson => {
            const card = document.createElement('div');
            card.className = 'lesson-card glass-panel';
            card.innerHTML = `
                <div>
                    <div class="cat-tag">${lesson.category}</div>
                    <h4>${lesson.title}</h4>
                </div>
                <div class="lesson-meta">
                    <div><i data-lucide="clock"></i> ${lesson.duration}</div>
                    <div><i data-lucide="bar-chart"></i> ${lesson.difficulty}</div>
                </div>
            `;
            card.addEventListener('click', () => openLesson(lesson));
            lessonGrid.appendChild(card);
        });
        
        lucide.createIcons();
    }

    function openLesson(lesson) {
        activeLesson = lesson;
        currentModalTab = 'learn';
        updateModalContent();
        modal.classList.add('show');
        overlay.classList.add('show');
        localStorage.setItem('robovian_last_lesson', JSON.stringify({id: lesson.id, title: lesson.title, level: currentLevel}));
        updateContinueCard();
    }

    function updateModalContent() {
        modalTabs.forEach(t => {
            t.classList.remove('active');
            if (t.dataset.view === currentModalTab) t.classList.add('active');
        });

        if (currentModalTab === 'learn') {
            modalContent.innerHTML = `
                <h2>${activeLesson.title}</h2>
                <div class="lesson-text">${activeLesson.explanation}</div>
                <div class="key-concepts">
                    <h5>Key Concepts</h5>
                    <ul>
                        ${activeLesson.keyConcepts.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
                <div class="practice-box glass-panel" style="padding: 16px; border-color: var(--orange);">
                    <h6 style="color: var(--orange); margin-bottom: 8px;">Practice Task</h6>
                    <p style="font-size: 13px;">${activeLesson.practiceTask}</p>
                </div>
            `;
            nextActionBtn.textContent = 'Take Quiz';
            nextActionBtn.onclick = () => {
                currentModalTab = 'quiz';
                updateModalContent();
            };
        } else {
            modalContent.innerHTML = `
                <h2>Quiz: ${activeLesson.title}</h2>
                <div class="quiz-container">
                    <p style="margin-bottom: 20px;">${activeLesson.quiz.question}</p>
                    <div class="options">
                        ${activeLesson.quiz.options.map((opt, i) => `
                            <button class="quiz-option" data-index="${i}">${opt}</button>
                        `).join('')}
                    </div>
                    <div id="quizFeedback" style="margin-top: 20px; font-weight: 600; text-align: center;"></div>
                </div>
            `;
            
            const options = modalContent.querySelectorAll('.quiz-option');
            options.forEach(opt => {
                opt.addEventListener('click', () => {
                    const idx = parseInt(opt.dataset.index);
                    if (idx === activeLesson.quiz.answer) {
                        opt.classList.add('correct');
                        document.getElementById('quizFeedback').innerHTML = `<span style="color: var(--green)">Correct! Great job.</span>`;
                        // Trigger completion logic here if desired
                    } else {
                        opt.classList.add('wrong');
                        document.getElementById('quizFeedback').innerHTML = `<span style="color: #EF4444">Oops! Try again.</span>`;
                    }
                });
            });

            nextActionBtn.textContent = 'Finish Lesson';
            nextActionBtn.onclick = () => closeModalAction();
        }
        lucide.createIcons();
    }

    function closeModalAction() {
        modal.classList.remove('show');
        overlay.classList.remove('show');
    }

    closeModal.onclick = closeModalAction;
    overlay.onclick = closeModalAction;

    modalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentModalTab = tab.dataset.view;
            updateModalContent();
        });
    });

    askGenieBtn.onclick = () => {
        const context = encodeURIComponent(`I am learning about ${activeLesson.title}. ${activeLesson.explanation}`);
        window.location.href = `robogenie-chat.html?context=${context}`;
    };

    function updateContinueCard() {
        const last = JSON.parse(localStorage.getItem('robovian_last_lesson'));
        if (last) {
            document.getElementById('lastLessonTitle').textContent = last.title;
            // Optionally update progress % based on completed lessons
        }
    }

    updateContinueCard();
});
