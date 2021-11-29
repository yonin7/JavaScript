const imgEl = document.querySelector('.img');

imgEl.addEventListener('click', (e) => {
  e.target.classList.toggle('on');
});
