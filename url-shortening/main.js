import '/scss/main.scss';

const mainNavigation = document.querySelector('.main-navigation');
const hamburger = document.querySelector('.hamburger');

const form = document.querySelector('#form-link-submission');
const input = document.querySelector('#form-link');
const linkResults = document.querySelector('.links-shortened-results');

function expandMenu() {
  mainNavigation.classList.toggle('open');
}

function ipGenerator(event) {
  event.preventDefault();
  const formIP = input.value;
  const shrtcodeAPI = `https://api.shrtco.de/v2/shorten?url=${formIP}`;

  fetch(shrtcodeAPI)
    .then((response) => response.json())
    .then((data) => {
      let div = document.createElement('div');
      let originalIP = document.createElement('p');
      let shortenedIP = document.createElement('p');
      let copyButton = document.createElement('button');

      div.classList.add('shortened-result');
      originalIP.classList.add('originalIP');
      shortenedIP.classList.add('shortenedIP');

      originalIP.textContent = data.result.original_link;
      shortenedIP.textContent = data.result.short_link;
      copyButton.textContent = 'Copy';

      linkResults.appendChild(div);
      div.appendChild(originalIP);
      div.appendChild(shortenedIP);
      div.appendChild(copyButton);

      console.log(data.result);
    });
}

hamburger.addEventListener('click', expandMenu);
form.addEventListener('submit', ipGenerator);
