import '/scss/main.scss';

const hamburger = document.querySelector('.hamburger');

function revealHamburgerNav() {
  const overlay = document.querySelector('.nav-overlay');
  overlay.classList.toggle('open');
}

hamburger.addEventListener('click', revealHamburgerNav);
