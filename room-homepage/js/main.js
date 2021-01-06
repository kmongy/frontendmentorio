import '/scss/main.scss';

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerExit = document.querySelector('.hamburger-menu-exit');

function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  navLinks.classList.toggle('open');
  navLinks.classList.toggle('block');

  menuOverlay.classList.toggle('block');
}

hamburgerMenu.addEventListener('click', toggleMobileMenu);
hamburgerExit.addEventListener('click', toggleMobileMenu);
