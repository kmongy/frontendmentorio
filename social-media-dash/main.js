import './scss/main.scss';

const darkBG = document.querySelector('body');
const socialMediaCard = document.querySelectorAll('.social-media-card');
const toggleButton = document.querySelector('#toggle-button');

function toggleDarkMode() {
  darkBG.classList.toggle('darkModeBG');
  socialMediaCard.classList.toggle('darkModeBG');
}

toggleButton.addEventListener('click', toggleDarkMode);

console.log("I'm ALIVE");
