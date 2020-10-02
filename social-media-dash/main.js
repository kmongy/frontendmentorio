import './scss/main.scss';

const toggleButton = document.querySelector('#toggle-button');

function toggleDarkMode() {
  console.log('DARK MODE');
}

toggleButton.addEventListener('click', toggleDarkMode);

console.log("I'm ALIVE");
