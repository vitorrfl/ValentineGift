// --- SELETORES GERAIS ---
const siteWrapper = document.querySelector('.site-wrapper');
const scrollDownIcon = document.querySelector('.scroll-down-icon');
const scrollUpIcon = document.querySelector('.scroll-up-icon');

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const letter = document.querySelector('.letter');

const lightbox = document.getElementById('lightbox-overlay');
const letterModal = document.getElementById('letter-modal');
const letterModalContent = document.getElementById('letter-modal-content');


// --- FUNÇÕES PARA ABRIR E FECHAR O MODAL DA CARTA ---
function openLetterModal() {
    const smallLetterContent = letter.querySelector('p').innerHTML;
    letterModalContent.innerHTML = smallLetterContent;
    document.body.classList.add('letter-modal-active');
}

function closeLetterModal() {
    document.body.classList.remove('letter-modal-active');
}


// --- LÓGICA DE NAVEGAÇÃO ---
scrollDownIcon.addEventListener('click', () => {
    siteWrapper.classList.add('mostrar-carta');
});

scrollUpIcon.addEventListener('click', () => {
    if (document.body.classList.contains('letter-modal-active')) {
        closeLetterModal();
        setTimeout(() => {
            siteWrapper.classList.remove('mostrar-carta');
        }, 500);
    } else {
        siteWrapper.classList.remove('mostrar-carta');
    }
});


// --- LÓGICA DO ENVELOPE ---
openBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
});


// --- LÓGICA DA CARTA E MODAL ---
letter.addEventListener('click', (e) => {
    e.stopPropagation();
    if (wrapper.classList.contains('open')) {
        openLetterModal();
    }
});

lightbox.addEventListener('click', closeLetterModal);
letterModal.addEventListener('click', closeLetterModal);


// --- LÓGICA DO FUNDO DE ESTRELAS ---
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
function setCanvasSize() { canvas.width = siteWrapper.offsetWidth; canvas.height = siteWrapper.offsetHeight; }
setCanvasSize();
const mouse = { x: undefined, y: undefined };
const particleColors = ['#7B68EE', '#9370DB', '#A69AF0', '#B4A9F2'];
let particlesArray = [];
const numberOfParticles = 300; 
const repelRadius = 80;
const repelForce = 0.05;      
const returnForce = 0.003;    
const friction = 0.985;       
let globalStarOpacity = 0;
class Particle {
    constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.originX = this.x; this.originY = this.y; this.size = Math.random() * 2 + 0.5; this.color = particleColors[Math.floor(Math.random() * particleColors.length)]; this.vx = 0; this.vy = 0; this.density = (Math.random() * 10) + 2; }
    draw() { ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.closePath(); ctx.fill(); }
    update() { let rect = canvas.getBoundingClientRect(); let mouseX = mouse.x - rect.left; let mouseY = mouse.y - rect.top; let dx = mouseX - this.x; let dy = mouseY - this.y; let distance = Math.sqrt(dx * dx + dy * dy); if (distance < repelRadius) { let forceDirectionX = dx / distance; let forceDirectionY = dy / distance; let force = (repelRadius - distance) / repelRadius; let directionX = forceDirectionX * force * this.density * -repelForce; let directionY = forceDirectionY * force * this.density * -repelForce; this.vx += directionX; this.vy += directionY; } this.vx += (this.originX - this.x) * returnForce; this.vy += (this.originY - this.y) * returnForce; this.vx *= friction; this.vy *= friction; this.x += this.vx; this.y += this.vy; }
}
class ShootingStar {
    constructor() { this.x = canvas.width + Math.random() * 300; this.y = Math.random() * (window.innerHeight * 0.5); this.size = Math.random() * 1.5 + 2; this.speedX = -(Math.random() * 3 + 4); this.speedY = Math.random() * 1 + 1; this.prevX = this.x; this.prevY = this.y; this.color = this.color = particleColors[Math.floor(Math.random() * particleColors.length)]; }
    update() { this.prevX = this.x; this.prevY = this.y; this.x += this.speedX; this.y += this.speedY; this.speedY += 0.03; }
    draw() { ctx.beginPath(); ctx.moveTo(this.prevX, this.prevY); ctx.lineTo(this.x, this.y); ctx.strokeStyle = this.color; ctx.lineWidth = this.size; ctx.stroke(); }
}
let shootingStars = [];
function init() { particlesArray = []; for (let i = 0; i < numberOfParticles; i++) { particlesArray.push(new Particle()); } }
init();
function animate() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (globalStarOpacity < 1) { globalStarOpacity += 0.003; }
    ctx.globalAlpha = globalStarOpacity; 
    for (let i = 0; i < particlesArray.length; i++) { particlesArray[i].update(); particlesArray[i].draw(); } 
    if(Math.random() < 0.007 && shootingStars.length < 2) {
        shootingStars.push(new ShootingStar());
    }
    for(let i = shootingStars.length - 1; i >= 0; i--) {
        shootingStars[i].update();
        shootingStars[i].draw();
        if(shootingStars[i].x < 0) {
            shootingStars.splice(i, 1);
        }
    }
    ctx.globalAlpha = 1; 
    requestAnimationFrame(animate); 
}
animate();
window.addEventListener('mousemove', (event) => { mouse.x = event.clientX; mouse.y = event.clientY; });
window.addEventListener('mouseout', () => { mouse.x = undefined; mouse.y = undefined; });
window.addEventListener('resize', () => { setCanvasSize(); init(); });


// --- NOVO: LÓGICA PARA ANIMAÇÃO DO CORAÇÃO ---
const heartIcon = document.querySelector('.heart-icon');
let isHeartAnimating = false;

heartIcon.addEventListener('click', () => {
    if (isHeartAnimating) return; // Impede cliques durante a animação

    isHeartAnimating = true;
    heartIcon.classList.add('is-beating');

    // Ouve o evento 'animationend' que o CSS dispara
    heartIcon.addEventListener('animationend', () => {
        heartIcon.classList.remove('is-beating');
        isHeartAnimating = false;
    }, { once: true }); // O listener se remove sozinho após ser disparado uma vez
});