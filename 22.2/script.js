const formEl = document.querySelector('form');
const checkboxEl = document.querySelector('.checkbox');
const imgEl = document.querySelector('.photo');

formEl.addEventListener('click', () => {
  console.log(checkboxEl.checked);
  if (checkboxEl.checked) {
    imgEl.classList.toggle('on');
  } else imgEl.classList.remove('on');
});
