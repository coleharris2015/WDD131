const characterList = [
    {
        id: 1, 
        name: "Optimus Prime",
        class: "Autobot Commander",
        faction: "Autobot", 
        mode: "robot",       
        level: 10,
        health: 120,
        image_robot: "images/optimus_robot.jpg", 
        image_alt: "images/optimus_truck.jpg",   
        damage_base: 25, 
        stats: [
            { label: "Strength", value: 18, description: "Raw physical power." },
            { label: "Wits", value: 15, description: "Intelligence and cunning." },
            { label: "Damage Base", value: 25, description: "Base damage rating." }
        ]
    },
    {
        id: 2, 
        name: "Ultra Magnus",
        class: "City Commander",
        faction: "Autobot", 
        mode: "robot",       
        level: 9,
        health: 115,
        image_robot: "images/magnus_robot.jpg", 
        image_alt: "images/magnus_truck.jpg",   
        damage_base: 23, 
        stats: [
            { label: "Strength", value: 17, description: "Raw physical power." },
            { label: "Wits", value: 14, description: "Reliable strategist." },
            { label: "Damage Base", value: 23, description: "Base damage rating." }
        ]
    },
    {
        id: 3, 
        name: "Hot Rod",
        class: "Brash Warrior",
        faction: "Autobot", 
        mode: "robot",       
        level: 7,
        health: 95,
        image_robot: "images/hotrod_robot.jpg", 
        image_alt: "images/hotrod_car.jpg",   
        damage_base: 20, 
        stats: [
            { label: "Speed", value: 16, description: "Exceptional reaction time." },
            { label: "Wits", value: 10, description: "Impulsive decision maker." },
            { label: "Damage Base", value: 20, description: "Base damage rating." }
        ]
    },
    {
        id: 4, 
        name: "Grimlock",
        class: "Dinobot Leader",
        faction: "Autobot", 
        mode: "robot",       
        level: 8,
        health: 130,
        image_robot: "images/grimlock_robot.jpg", 
        image_alt: "images/grimlock_dino.jpg",   
        damage_base: 30, 
        stats: [
            { label: "Strength", value: 20, description: "Me Grimlock strongest!" },
            { label: "Wits", value: 5, description: "Smash first, ask questions later." },
            { label: "Damage Base", value: 30, description: "Base damage rating." }
        ]
    },
    {
        id: 5, 
        name: "Kup",
        class: "Veteran Soldier",
        faction: "Autobot", 
        mode: "robot",       
        level: 6,
        health: 90,
        image_robot: "images/kup_robot.jpg", 
        image_alt: "images/kup_truck.jpg",   
        damage_base: 18, 
        stats: [
            { label: "Experience", value: 19, description: "Seen it all, done it all." },
            { label: "Wits", value: 12, description: "Tactical knowledge." },
            { label: "Damage Base", value: 18, description: "Base damage rating." }
        ]
    },
    {
        id: 6, 
        name: "Bumblebee",
        class: "Scout",
        faction: "Autobot", 
        mode: "robot",       
        level: 5,
        health: 75,
        image_robot: "images/bee_robot.jpg", 
        image_alt: "images/bee_car.jpg",   
        damage_base: 15, 
        stats: [
            { label: "Stealth", value: 17, description: "Excellent infiltration skills." },
            { label: "Speed", value: 16, description: "Quick and agile." },
            { label: "Damage Base", value: 15, description: "Base damage rating." }
        ]
    },
    {
        id: 7, 
        name: "Cliffjumper",
        class: "Hot-Headed Warrior",
        faction: "Autobot", 
        mode: "robot",       
        level: 5,
        health: 70,
        image_robot: "images/cliff_robot.jpg", 
        image_alt: "images/cliff_car.jpg",   
        damage_base: 17, 
        stats: [
            { label: "Temper", value: 18, description: "Always spoiling for a fight." },
            { label: "Wits", value: 8, description: "Prone to reckless action." },
            { label: "Damage Base", value: 17, description: "Base damage rating." }
        ]
    },
    {
        id: 8, 
        name: "Prowl",
        class: "Military Strategist",
        faction: "Autobot", 
        mode: "robot",       
        level: 7,
        health: 95,
        image_robot: "images/prowl_robot.jpg", 
        image_alt: "images/prowl_car.jpg",   
        damage_base: 19, 
        stats: [
            { label: "Wits", value: 19, description: "Master of logical warfare." },
            { label: "Discipline", value: 20, description: "Unwavering focus." },
            { label: "Damage Base", value: 19, description: "Base damage rating." }
        ]
    },
    {
        id: 9, 
        name: "Jetfire",
        class: "Sky Guardian",
        faction: "Autobot", 
        mode: "robot",       
        level: 9,
        health: 110,
        image_robot: "images/jetfire_robot.jpg", 
        image_alt: "images/jetfire_jet.jpg",   
        damage_base: 22, 
        stats: [
            { label: "Flight Speed", value: 20, description: "Fastest Autobot in the air." },
            { label: "Strength", value: 15, description: "Powerful weapons array." },
            { label: "Damage Base", value: 22, description: "Base damage rating." }
        ]
    },
    {
        id: 10, 
        name: "Perceptor",
        class: "Scientist",
        faction: "Autobot", 
        mode: "robot",       
        level: 6,
        health: 80,
        image_robot: "images/perc_robot.jpg", 
        image_alt: "images/perc_scope.jpg",   
        damage_base: 14, 
        stats: [
            { label: "Science", value: 20, description: "Brilliant physicist and inventor." },
            { label: "Accuracy", value: 17, description: "Precise measurements." },
            { label: "Damage Base", value: 14, description: "Base damage rating." }
        ]
    },
    
    {
        id: 11, 
        name: "Megatron",
        class: "Decepticon Tyrant",
        faction: "Decepticon", 
        mode: "robot",
        level: 10,
        health: 125,
        image_robot: "images/megatron_robot.jpg",
        image_alt: "images/megatron_gun.jpg",
        damage_base: 30,
        stats: [
            { label: "Strength", value: 19, description: "Unmatched destructive power." },
            { label: "Cunning", value: 18, description: "Ruthless tactical mind." },
            { label: "Damage Base", value: 30, description: "Base damage rating." }
        ]
    },
    {
        id: 12, 
        name: "Starscream",
        class: "Air Commander",
        faction: "Decepticon", 
        mode: "robot",
        level: 8,
        health: 100,
        image_robot: "images/scream_robot.jpg",
        image_alt: "images/scream_jet.jpg",
        damage_base: 21,
        stats: [
            { label: "Flight Speed", value: 19, description: "Exceptional aerial maneuverability." },
            { label: "Loyalty", value: 1, description: "Always plotting usurpation." },
            { label: "Damage Base", value: 21, description: "Base damage rating." }
        ]
    },
    {
        id: 13, 
        name: "Soundwave",
        class: "Communications Officer",
        faction: "Decepticon", 
        mode: "robot",
        level: 7,
        health: 90,
        image_robot: "images/soundwave_robot.jpg",
        image_alt: "images/soundwave_deck.jpg",
        damage_base: 18,
        stats: [
            { label: "Intelligence", value: 20, description: "Master of espionage and surveillance." },
            { label: "Loyalty", value: 20, description: "Highly loyal to Megatron." },
            { label: "Damage Base", value: 18, description: "Base damage rating." }
        ]
    },
    {
        id: 14, 
        name: "Blitzwing",
        class: "Triple Changer",
        faction: "Decepticon", 
        mode: "robot",
        level: 7,
        health: 105,
        image_robot: "images/blitz_robot.jpg",
        image_alt: "images/blitz_tank.jpg",
        damage_base: 24,
        stats: [
            { label: "Versatility", value: 18, description: "Switches between three modes." },
            { label: "Wits", value: 10, description: "Mentally unstable." },
            { label: "Damage Base", value: 24, description: "Base damage rating." }
        ]
    },
    {
        id: 15, 
        name: "Shockwave",
        class: "Military Operations Commander",
        faction: "Decepticon", 
        mode: "robot",
        level: 9,
        health: 110,
        image_robot: "images/shock_robot.jpg",
        image_alt: "images/shock_gun.jpg",
        damage_base: 26,
        stats: [
            { label: "Logic", value: 20, description: "Governed entirely by logic." },
            { label: "Damage Base", value: 26, description: "Base damage rating." },
            { label: "Emotional Stability", value: 1, description: "Cold and ruthless." }
        ]
    },
    {
        id: 16, 
        name: "Thundercracker",
        class: "Seeker",
        faction: "Decepticon", 
        mode: "robot",
        level: 6,
        health: 85,
        image_robot: "images/thund_robot.jpg",
        image_alt: "images/thund_jet.jpg",
        damage_base: 19,
        stats: [
            { label: "Flight Speed", value: 17, description: "Creates disruptive sonic booms." },
            { label: "Morale", value: 5, description: "Lacks faith in the cause." },
            { label: "Damage Base", value: 19, description: "Base damage rating." }
        ]
    },
    {
        id: 17, 
        name: "Motormaster",
        class: "Stunticon Leader",
        faction: "Decepticon", 
        mode: "robot",
        level: 7,
        health: 105,
        image_robot: "images/motor_robot.jpg",
        image_alt: "images/motor_truck.jpg",
        damage_base: 23,
        stats: [
            { label: "Strength", value: 16, description: "Wishes to prove superiority to Prime." },
            { label: "Combination", value: 20, description: "Forms Menasor." },
            { label: "Damage Base", value: 23, description: "Base damage rating." }
        ]
    },
    {
        id: 18, 
        name: "Skywarp",
        class: "Seeker",
        faction: "Decepticon", 
        mode: "robot",
        level: 6,
        health: 80,
        image_robot: "images/skywarp_robot.jpg",
        image_alt: "images/skywarp_jet.jpg",
        damage_base: 18,
        stats: [
            { label: "Teleportation", value: 20, description: "Can instantly jump anywhere." },
            { label: "Cunning", value: 12, description: "Lacks initiative." },
            { label: "Damage Base", value: 18, description: "Base damage rating." }
        ]
    },
    {
        id: 19, 
        name: "Dirge",
        class: "Conehead Seeker",
        faction: "Decepticon", 
        mode: "robot",
        level: 5,
        health: 75,
        image_robot: "images/dirge_robot.jpg",
        image_alt: "images/dirge_jet.jpg",
        damage_base: 17,
        stats: [
            { label: "Fear Generation", value: 18, description: "His engine noise instills panic." },
            { label: "Morale", value: 10, description: "Driven by cowardice." },
            { label: "Damage Base", value: 17, description: "Base damage rating." }
        ]
    },
    {
        id: 20, 
        name: "Galvatron",
        class: "Future Decepticon Leader",
        faction: "Decepticon", 
        mode: "robot",
        level: 12,
        health: 140,
        image_robot: "images/galvatron_robot.jpg",
        image_alt: "images/galvatron_cannon.jpg",
        damage_base: 35,
        stats: [
            { label: "Strength", value: 22, description: "Overwhelming future power." },
            { label: "Madness", value: 20, description: "Mentally unstable and unpredictable." },
            { label: "Damage Base", value: 35, description: "Base damage rating." }
        ]
    },
];

let character = characterList[0]; 
let enemy = characterList[10]; 

function selectEnemy() {
    const opposingFaction = character.faction === 'Autobot' ? 'Decepticon' : 'Autobot';

    const enemyCandidates = characterList.filter(char => char.faction === opposingFaction);

    if (enemyCandidates.length > 0) {
        let randomIndex;
        let newEnemy;
        do {
            randomIndex = Math.floor(Math.random() * enemyCandidates.length);
            newEnemy = enemyCandidates[randomIndex];
        } while (newEnemy.id === enemy.id);
        
        const originalData = characterList.find(c => c.id === newEnemy.id);
        newEnemy.health = originalData.health;

        enemy = newEnemy;
    }
}

function selectCharacter(id) {
    const newChar = characterList.find(c => c.id === id);
    if (newChar) {
        const originalData = characterList.find(c => c.id === newChar.id);
        newChar.health = originalData.health;

        character = newChar; 
        
        selectEnemy(); 
        
        updateCardDisplay();
        updateEnemyDisplay(); 
        document.getElementById('attack-btn').disabled = false;
    }
}

const defeatedEnemy = function() {
    levelUp();
    
    selectEnemy();
    
    updateCardDisplay();
    updateEnemyDisplay();
};

const enemyAttack = function() {
    if (character.health > 0) {
        const damage = Math.floor(enemy.damage_base * (0.8 + Math.random() * 0.4)); 
        
        character.health -= damage;
        
        if (character.health <= 0) {
            character.health = 0; 
            document.getElementById('attack-btn').disabled = true;
            alert(`${character.name} has been destroyed! Select a new character to continue.`);
        }
        updateCardDisplay();
    }
}

const attacked = function() {
    if (enemy.health > 0 && character.health > 0) {
        const playerDamage = Math.floor(character.damage_base * (0.8 + Math.random() * 0.4)); 
        
        enemy.health -= playerDamage;
        
        if (enemy.health <= 0) {
            enemy.health = 0; 
            updateEnemyDisplay();
            
            defeatedEnemy();
            return; 
        } else {
            updateEnemyDisplay();
        }
        
        enemyAttack();
    } 
};

const levelUp = function() {
    character.level += 1;
    const maxHealth = 120 + (character.level * 5); 
    character.health = maxHealth;
    
    document.getElementById('attack-btn').disabled = false; 
    updateCardDisplay();
};

const toggleMode = function() {
    if (character.mode === 'robot') {
        character.mode = 'alt';
        document.getElementById('transform-btn').textContent = "Transform to Robot";
    } else {
        character.mode = 'robot';
        document.getElementById('transform-btn').textContent = "Transform to Alt Mode";
    }
    updateCardDisplay(); 
};

function updateCardDisplay() {
    const healthEl = document.getElementById('char-health');
    const charImageEl = document.getElementById('char-image');

    document.getElementById('char-name').textContent = character.name;
    document.getElementById('char-class').textContent = character.class;
    document.getElementById('char-level').textContent = character.level;
    
    if (character.mode === 'robot') {
        charImageEl.src = character.image_robot;
    } else {
        charImageEl.src = character.image_alt;
    }
    
    healthEl.classList.remove('dead-status');

    if (character.health === 0) {
        healthEl.textContent = 'DESTROYED';
        healthEl.classList.add('dead-status');
    } else {
        healthEl.textContent = character.health;
        if (character.health <= 40) {
            healthEl.classList.add('dead-status');
        }
    }
}

function updateEnemyDisplay() {
    const healthEl = document.getElementById('enemy-health');
    const imageEl = document.getElementById('enemy-image');

    document.getElementById('enemy-name').textContent = enemy.name;
    document.getElementById('enemy-class').textContent = enemy.class;
    
    imageEl.src = enemy.image_robot;
    
    healthEl.classList.remove('dead-status');

    if (enemy.health === 0) {
        healthEl.textContent = 'DESTROYED';
        healthEl.classList.add('dead-status');
        document.getElementById('attack-btn').disabled = true;
    } else {
        healthEl.textContent = enemy.health;
        document.getElementById('attack-btn').disabled = false;
        if (enemy.health <= 40) {
            healthEl.classList.add('dead-status');
        }
    }
}

function setupCharacterStats() {
    const statsContainer = document.getElementById('char-stats-container');
    
    statsContainer.innerHTML = ''; 
    
    character.stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item'; 

        statItem.innerHTML = `
            <strong>${stat.label}:</strong> 
            <span>${stat.value}</span> 
            <small>(${stat.description})</small>
        `;

        statsContainer.appendChild(statItem);
    });
}

function setupCharacterSelection() {
    const selectorContainer = document.getElementById('char-selector-container');
    if (!selectorContainer) return;

    selectorContainer.innerHTML = '';

    characterList.forEach(char => {
        const charButton = document.createElement('button');
        charButton.textContent = char.name;
        charButton.className = 'char-select-btn'; 
        
        charButton.dataset.charId = char.id; 

        if (char.id === character.id) {
            charButton.classList.add('active');
        }

        charButton.addEventListener('click', (event) => {
            const id = parseInt(event.target.dataset.charId);
            selectCharacter(id); 
            setupCharacterStats(); 

            document.querySelectorAll('.char-select-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        });

        selectorContainer.appendChild(charButton);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    selectEnemy(); 

    updateCardDisplay();
    setupCharacterStats(); 
    setupCharacterSelection(); 
    updateEnemyDisplay(); 

    document.getElementById('attack-btn').addEventListener('click', () => {
        attacked();
    });

    document.getElementById('level-btn').addEventListener('click', () => {
        levelUp();
    });
    
    document.getElementById('transform-btn').addEventListener('click', () => {
        toggleMode();
    });
});