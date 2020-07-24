import '/scss/main.scss';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');
const featuresTab = document.querySelector('.features__tabs');

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

hamburger.addEventListener('click', revealHamburgerNav);
tabButtons.forEach((button) =>
  button.addEventListener('click', handleClickTab)
);
