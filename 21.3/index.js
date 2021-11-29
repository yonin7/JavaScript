const textarea = document.querySelector('#box');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const textareaSize = textarea.value.length;
  if (textareaSize < textarea.minLength)
    alert(`Write at least ${textarea.minLength} character!`);
  else alert(`Send!`);
});
