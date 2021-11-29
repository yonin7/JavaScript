const btnplus = document.querySelector('.plus');
const btnmin = document.querySelector('.min');
const par = document.querySelector('p');
const parStyle = getComputedStyle(par);
let size = parseInt(parStyle.fontSize);

btnplus.addEventListener('click', function () {
  size++;
  if (size < 100) {
    let newSize = `${size}px`;
    par.style.fontSize = newSize;
  }
});

btnmin.addEventListener('click', function () {
  size--;
  if (size > 6) {
    let newSize = `${size}px`;
    par.style.fontSize = newSize;
  }
});
