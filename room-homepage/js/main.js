import '/scss/main.scss';

const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerExit = document.querySelector('.hamburger-menu-exit');

const carouselLeft = document.querySelector('.carousel-left');
const carouselRight = document.querySelector('.carousel-right');

function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuOverlay = document.querySelector('.menu-overlay');
  navLinks.classList.toggle('open');
  navLinks.classList.toggle('block');

  menuOverlay.classList.toggle('block');
}

function carousel() {
  const descriptorHeading = document.querySelector('.descriptor-heading');
  const descriptorText = document.querySelector('.descriptor-text');
  const blurb1 = {
    heading: 'We are available all across the globe',
    text: `With stores all over the world, it's easy for you to find furniture for you home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
  };

  const blurb2 = {
    heading: 'Manufactured with the best materials',
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
  };

  const hero = document.querySelector('.hero');
}

hamburgerMenu.addEventListener('click', toggleMobileMenu);
hamburgerExit.addEventListener('click', toggleMobileMenu);

carouselLeft.addEventListener('click', carousel);
carouselRight.addEventListener('click', carousel);
