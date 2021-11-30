const formEl = document.querySelector('.inputs');
const nameEl = document.querySelector('#name');
const ageEl = document.querySelector('#age');
const emailEl = document.querySelector('#email');
const confirmationEl = document.querySelector('.confirmation');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const confirmName = document.createElement('p');
  confirmName.innerText = `Name: ${nameEl.value}`;
  confirmationEl.appendChild(confirmName);

  const confirmAge = document.createElement('p');
  confirmAge.innerText = `Age: ${ageEl.value}`;
  confirmationEl.appendChild(confirmAge);

  const confirmEmail = document.createElement('p');
  confirmEmail.innerText = `Email: ${emailEl.value}`;
  confirmationEl.appendChild(confirmEmail);

  const form2 = document.createElement('form');
  form2.style.width = '200px';
  form2.style.display = 'flex';
  form2.style.justifyContent = 'space-evenly';
  confirmationEl.appendChild(form2);

  const confirm = document.createElement('button');
  confirm.innerText = 'Confirm';

  const changeBtn = document.createElement('button');
  changeBtn.innerText = 'Change';

  form2.appendChild(confirm);
  form2.appendChild(changeBtn);

  confirmationEl.classList.add('on');
  formEl.classList.add('off');

  confirm.addEventListener('click', (ele) => {
    ele.preventDefault();
    const confirmMsg = document.createElement('p');
    confirmMsg.innerText = `congratulations you successfully sent this form`;
    console.log(ele);
    confirmationEl.appendChild(confirmMsg);
  });
  changeBtn.addEventListener('click', () => {
    confirmationEl.classList.remove('on');
    formEl.classList.remove('off');
  });
});
