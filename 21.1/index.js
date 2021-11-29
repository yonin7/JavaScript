const btn = document.querySelector('button');
const par = document.querySelector('p');

btn.addEventListener('click', function () {
  const input = document.querySelector('input');
  if (input.value >= '18') par.innerText = 'you can drink appear';
  else par.innerText = 'you’re too young18';
});
