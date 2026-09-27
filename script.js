document.addEventListener('DOMContentLoaded', function() {
    const introOverlay = document.getElementById('intro-overlay');
    const enterBtn = document.getElementById('enter-btn');
    const introVideo = document.getElementById('intro-video');

     const autoCloseTimer = setTimeout(() => {
        closeIntro();
    }, 7000);

    enterBtn.addEventListener('click', () => {
        clearTimeout(autoCloseTimer);
        closeIntro();
    });

    introVideo.addEventListener('click', () => {
        clearTimeout(autoCloseTimer);
        closeIntro();
    });

    function closeIntro() {
        introOverlay.classList.add('hidden');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

let skillsJumpscareTriggered = false;

const skillsLink = document.querySelector('a[href="#skills"]');
const jumpscareOverlay = document.getElementById('jumpscare-overlay');
const jumpscareVideo = document.getElementById('jumpscare-video');
const jumpscareSound = document.getElementById('jumpscare-sound');

skillsLink.addEventListener('click', function(e) {
    if (!skillsJumpscareTriggered) {
        e.preventDefault();
        triggerJumpscare();
    }
});

function triggerJumpscare() {
    skillsJumpscareTriggered = true;
    
    jumpscareOverlay.classList.remove('hidden');
    jumpscareVideo.play();
    jumpscareSound.play();
    
    document.body.style.animation = 'screenShake 0.5s';
    jumpscareOverlay.style.background = 'rgba(255, 0, 0, 0.2)';

     setTimeout(() =>  {
     jumpscareOverlay.classList.add('hidden');
     jumpscareVideo.pause();
     jumpscareVideo.currentTime = 0;
     document.body.style.animation = 'none';

     const skillsSection = document.getElementById('skills');
     skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1500);
}

console.log("DeadCode loaded");