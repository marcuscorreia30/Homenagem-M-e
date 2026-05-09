// Função para criar confete de flores
function createFlowerConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);

    const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐', '🌼', '🌸'];

    for (let i = 0; i < 60; i++) {
        const flower = document.createElement('div');
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.position = 'absolute';
        flower.style.fontSize = Math.random() * 35 + 20 + 'px';
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animation = `fall ${Math.random() * 4 + 3}s linear forwards`;
        flower.style.transform = `rotate(${Math.random() * 360}deg)`;
        flower.style.opacity = Math.random() * 0.8 + 0.2;
        confettiContainer.appendChild(flower);
    }

    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 6000);
}

// Função para criar confete de corações
function createHeartConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    document.body.appendChild(confettiContainer);

    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💘'];

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 30 + 25 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(heart);
    }

    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 5000);
}

// Adicionar eventos aos botões
document.getElementById('flowerButton').addEventListener('click', createFlowerConfetti);
document.getElementById('heartButton').addEventListener('click', createHeartConfetti);

// Lightbox para fotos
const lightbox = document.getElementById('photoLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.getElementById('closeLightbox');

document.querySelectorAll('.photo-img').forEach(img => {
    img.addEventListener('click', function() {
        lightboxImg.src = this.src;
        lightboxCaption.textContent = this.alt;
        lightbox.classList.add('show');
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('show')) {
        lightbox.classList.remove('show');
    }
});

// Animação de revelação ao scroll
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Chamada inicial

// Responsividade: ajustar layout dinamicamente
function adjustLayout() {
    const width = window.innerWidth;
    const mainContent = document.querySelector('.main-content');

    if (width <= 768) {
        mainContent.style.flexDirection = 'column';
    } else {
        mainContent.style.flexDirection = 'row';
    }
}

window.addEventListener('resize', adjustLayout);
adjustLayout(); // Chamada inicial

// Animação CSS para as flores e corações caírem
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            top: -20px;
            opacity: 1;
            transform: rotate(0deg) scale(1);
        }
        10% {
            transform: rotate(36deg) scale(1.1);
        }
        50% {
            transform: rotate(180deg) scale(0.9);
        }
        90% {
            transform: rotate(324deg) scale(1.05);
        }
        100% {
            top: 100vh;
            opacity: 0;
            transform: rotate(360deg) scale(0.8);
        }
    }

    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);