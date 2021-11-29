const inputEl = document.querySelector('input');
const btnEl = document.querySelector('button');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('mouseover', function () {
  for (let i = 0; i < inputEl.value; i++) {
    divEl = document.createElement('div');
    divEl.classList.toggle('box');
    bodyEl.appendChild(divEl);
  }
});
