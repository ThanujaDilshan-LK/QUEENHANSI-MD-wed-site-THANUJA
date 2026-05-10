// Generate Floating Ghosts
const bg = document.getElementById('bg');
for (let i = 0; i < 15; i++) {
    let ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.innerText = '👻';
    ghost.style.left = Math.random() * 100 + 'vw';
    ghost.style.animationDelay = Math.random() * 5 + 's';
    ghost.style.fontSize = (Math.random() * 20 + 20) + 'px';
    bg.appendChild(ghost);
}

// Navigation Functions
function showDeploy() {
    hideAll();
    document.getElementById('deploy-panel').classList.remove('hidden');
}

function showSession() {
    hideAll();
    document.getElementById('session-panel').classList.remove('hidden');
}

function showPairCode() {
    hideAll();
    document.getElementById('pair-panel').classList.remove('hidden');
}

function goBack() {
    hideAll();
    document.getElementById('main-menu').classList.remove('hidden');
}

function goBackToSession() {
    hideAll();
    document.getElementById('session-panel').classList.remove('hidden');
}

function hideAll() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('deploy-panel').classList.add('hidden');
    document.getElementById('session-panel').classList.add('hidden');
    document.getElementById('pair-panel').classList.add('hidden');
}
