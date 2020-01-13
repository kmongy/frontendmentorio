const basicPrice = document.querySelector('.basic-price');
const professionalPrice = document.querySelector('.professional-price');
const masterPrice = document.querySelector('.master-price');
let checkbox = document.querySelector('.checkbox');

function priceChange() {
  if(checkbox.checked) {
    basicPrice.innerText = '19.99';
    professionalPrice.innerText = '24.99';
    masterPrice.innerText = '39.99';
  } else {
    basicPrice.innerText = '199.99';
    professionalPrice.innerText = '249.99';
    masterPrice.innerText = '399.99';
  }
}

checkbox.addEventListener('click', priceChange);