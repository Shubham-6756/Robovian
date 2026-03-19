document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('syllabusContainer');
    const searchInput = document.getElementById('syllabusSearch');
    
    // Safety check
    if (!window.syllabusData) {
        container.innerHTML = '<p style="color: #ef4444;text-align:center;">Failed to load syllabus data.</p>';
        return;
    }

    const data = window.syllabusData;

    function renderSyllabus(filterText = '') {
        container.innerHTML = '';
        let matchCount = 0;
        
        data.forEach((phase, index) => {
            // Apply filtering if needed
            let phaseMatches = filterText === '' || phase.title.toLowerCase().includes(filterText);
            let filteredCategories = [];
            
            phase.categories.forEach(cat => {
                let catMatches = phaseMatches || cat.name.toLowerCase().includes(filterText);
                let matchedItems = [];
                
                cat.items.forEach(item => {
                    if (catMatches || item.toLowerCase().includes(filterText)) {
                        matchedItems.push(item);
                    }
                });
                
                if (matchedItems.length > 0) {
                    filteredCategories.push({
                        name: cat.name,
                        items: matchedItems
                    });
                    phaseMatches = true; // if any item inside matches, the phase corresponds
                }
            });
            
            if (!phaseMatches) return;
            matchCount++;
            
            // Generate card HTML
            const card = document.createElement('div');
            card.className = 'phase-card';
            // Open the first few automatically or all if filtering
            if (filterText !== '' || index === 0) {
                card.classList.add('active');
            }
            
            // Choose an icon based on title
            let iconType = 'book';
            if(phase.title.toLowerCase().includes('phase 1')) iconType = 'battery-low';
            else if(phase.title.toLowerCase().includes('phase 2')) iconType = 'battery-medium';
            else if(phase.title.toLowerCase().includes('phase 3')) iconType = 'battery';
            else if(phase.title.toLowerCase().includes('phase 4')) iconType = 'cpu';
            else if(phase.title.toLowerCase().includes('phase 5')) iconType = 'graduation-cap';
            else if(phase.title.toLowerCase().includes('project')) iconType = 'lightbulb';
            else if(phase.title.toLowerCase().includes('skills')) iconType = 'wrench';
            else if(phase.title.toLowerCase().includes('sensor')) iconType = 'radar';
            else if(phase.title.toLowerCase().includes('ai')) iconType = 'brain';
            else if(phase.title.toLowerCase().includes('math')) iconType = 'calculator';

            // HTML Structure
            let innerHTML = `
                <div class="phase-header">
                    <h3 class="phase-title">
                        <i data-lucide="${iconType}" class="phase-icon"></i>
                        ${phase.title}
                    </h3>
                    <i data-lucide="chevron-down" class="phase-toggle"></i>
                </div>
                <div class="phase-body">
            `;
            
            let catsToRender = filterText === '' ? phase.categories : filteredCategories;
            catsToRender.forEach(cat => {
                innerHTML += `
                    <div class="category-section">
                        <h4 class="category-title">${cat.name}</h4>
                        <ul class="item-list">
                            ${cat.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
            
            innerHTML += `</div>`;
            card.innerHTML = innerHTML;
            
            // Toggle Logic
            const header = card.querySelector('.phase-header');
            header.addEventListener('click', () => {
                card.classList.toggle('active');
            });
            
            container.appendChild(card);
        });
        
        // Re-init lucide icons for newly added DOM elements
        if (window.lucide) {
            window.lucide.createIcons();
        }

        if (matchCount === 0) {
            container.innerHTML = '<p style="text-align:center; color: var(--text-muted); margin-top:40px;">No results found.</p>';
        }
    }

    // Initial render
    renderSyllabus();

    // Event listener for search
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        renderSyllabus(val);
    });
});
