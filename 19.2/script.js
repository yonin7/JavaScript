const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
    email: 'jimmya@gmail.com',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
    email: 'gold@hotmail.com',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
    email: 'timmy.hotmail.com',
  },
];

const olEl = document.createElement('ol');
users.forEach((e) => {
  let liEL = document.createElement('li');
  liEL.innerText = `${e.firstName} ${e.lastName}`;
  olEl.appendChild(liEL);
  const dataId = document.createElement('Number');
  dataId.innerText = `${e.id}`;
});
