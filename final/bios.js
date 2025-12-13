const bioContainer = document.querySelector('.bio-container');
let activeFilter = 'All';

function renderBios(filter) {
    bioContainer.innerHTML = ''; 

    
    const filteredList = characterList.filter(char => {
        if (filter === 'Autobot') {
            return char.faction === 'Autobot';
        } else if (filter === 'Decepticon') {
            return char.faction === 'Decepticon';
        }
        return true;
    });

    filteredList.forEach(char => {
        const cardClass = char.faction === 'Autobot' ? 'player-card' : 'enemy-card';
        
        const statsHtml = char.stats.map(stat => `
            <div class="stat-item">
                <strong>${stat.label}:</strong> 
                <span>${stat.value}</span> 
                <small>(${stat.description})</small>
            </div>
        `).join('');

        const bioCard = document.createElement('div');
        bioCard.className = `card bio-card ${cardClass}`;

        bioCard.innerHTML = `
            <img src="${char.image_robot}" alt="${char.name} Robot Mode" class="image">
            <h2 class="name">${char.name}</h2>
            <div class="stats">
                <p><strong>Faction:</strong> ${char.faction}</p>
                <p><strong>Class:</strong> ${char.class}</p>
                <p><strong>Level:</strong> ${char.level}</p>
            </div>
            <div class="attributes" id="bio-stats-${char.id}">
                <h3>Primary Attributes</h3>
                ${statsHtml}
            </div>
        `;
        
        bioContainer.appendChild(bioCard);
    });
}

function updateActiveButton(targetButtonId) {
    document.querySelectorAll('.bio-filters .char-select-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(targetButtonId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    
    renderBios(activeFilter);

    
    document.getElementById('filter-all').addEventListener('click', (event) => {
        activeFilter = 'All';
        renderBios(activeFilter);
        updateActiveButton(event.target.id);
    });

    document.getElementById('filter-autobots').addEventListener('click', (event) => {
        activeFilter = 'Autobot';
        renderBios(activeFilter);
        updateActiveButton(event.target.id);
    });

    document.getElementById('filter-decepticons').addEventListener('click', (event) => {
        activeFilter = 'Decepticon';
        renderBios(activeFilter);
        updateActiveButton(event.target.id);
    });
});