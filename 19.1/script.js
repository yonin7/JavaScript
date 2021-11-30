const newtitle2 = document.getElementsByClassName('start-here')[0];
newtitle2.innerText = 'main title';

const ul = document.querySelector('li ul');
const title4 = document.createElement('li');
title4.innerText = 'sub title 4';
ul.appendChild(title4);

const lestLi = newtitle2.nextElementSibling.nextElementSibling;
lestLi.remove();

const titleEl = document.querySelector('title');
titleEl.innerText = 'Master Of The Dom';

const pEl = document.querySelector('p');
pEl.innerText = 'Yes!';
