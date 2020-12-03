import '/scss/main.scss';

const mainNavigation = document.querySelector('.main-navigation');
const hamburger = document.querySelector('.hamburger');

function expandMenu() {
  mainNavigation.classList.toggle('open');
}

hamburger.addEventListener('click', expandMenu);
