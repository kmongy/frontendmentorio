import '/scss/main.scss';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');
const featuresTab = document.querySelector('.features__tabs');

const dropdownItem = document.querySelectorAll('.faq__questions-wrapper');
const accordionHeading = document.querySelectorAll('.faq__header');

const contactForm = document.querySelector('.contact-form');

function revealHamburgerNav() {
  const overlay = document.querySelector('.nav-overlay');

  overlay.classList.toggle('open');
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}

function handleClickTab(event) {
  const buttonSpan = event.currentTarget.querySelector('span');
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });

  event.currentTarget.setAttribute('aria-selected', true);
  buttonSpan.classList.add('active');

  const id = event.currentTarget.id;
  const tabPanel = featuresTab.querySelector(`[aria-labelledby="${id}"]`);

  tabPanel.hidden = false;
}

function toggleDropdown() {
  const parentItem = this.parentNode;

  dropdownItem.forEach((item) => {
    if (parentItem === item) {
      parentItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });
}

function handleSubmit(event) {
  event.preventDefault();
}

hamburger.addEventListener('click', revealHamburgerNav);
tabButtons.forEach((button) =>
  button.addEventListener('click', handleClickTab)
);

accordionHeading.forEach((item) =>
  item.addEventListener('click', toggleDropdown)
);

contactForm.addEventListener('submit', handleSubmit);
