// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}); 

// Fade-in ao rolar a página
const fadeEls = document.querySelectorAll('.fade-in');
function handleFadeIn() {
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn); 