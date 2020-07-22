import '/scss/main.scss';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

function revealHamburgerNav() {
  const overlay = document.querySelector('.nav-overlay');

  overlay.classList.toggle('open');
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}

hamburger.addEventListener('click', revealHamburgerNav);
