// Navigation toggle
const hamBtn = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');
hamBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Carousel scroll logic (optional next/prev buttons could be added)
const carousel = document.querySelector('.carousel');
// Optional: auto-scroll
let autoScroll = setInterval(() => {
  carousel.scrollLeft += 1;
}, 40);

// Modal logic
const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');

if (openModalBtn && closeModalBtn && modal) {
  openModalBtn.addEventListener('click', () => modal.classList.add('visible'));
  closeModalBtn.addEventListener('click', () => modal.classList.remove('visible'));
}

// localStorage example - tracking last visit or user name
window.addEventListener('load', () => {
  const visit = localStorage.getItem('lastVisit');
  if (!visit) {
    localStorage.setItem('lastVisit', new Date().toISOString());
  } else {
    console.log('Welcome back! Last visit:', visit);
    localStorage.setItem('lastVisit', new Date().toISOString());
  }
});
