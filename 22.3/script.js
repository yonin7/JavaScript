const letter = document.querySelector('.letter');
const Message = document.querySelector('.displayMessage');
const keysGuessedEl = document.querySelector('.keysguessed');
const Guesses = document.querySelector('.guesses');
const arrGuesses = [];
const rendomLetter = Math.random().toString(36).substring(2, 3);
const buttonEl = document.createElement('button');
const conEl = document.querySelector('.container');
console.log(rendomLetter);

document.addEventListener('keypress', (e) => {
  const smallLetter = e.key.toLowerCase();
  console.log(smallLetter);
  if (smallLetter.charCodeAt() > 96 && smallLetter.charCodeAt() < 123) {
    letter.innerText = smallLetter;
    if (!arrGuesses.includes(smallLetter)) {
      if (smallLetter === rendomLetter) {
        Message.innerText = `Right letter!`;
        Message.classList.add('on');
        keysGuessedEl.innerText = 'Would you like to play again?';
        buttonEl.innerText = 'Yes';
        Guesses.remove();
        conEl.appendChild(buttonEl);
      } else {
        Message.innerText = `${smallLetter} Nope, wrong letter`;
        arrGuesses.push(smallLetter);
        Guesses.innerText = arrGuesses.join();
      }
    } else Message.innerText = `${smallLetter} has already been guessed!`;
  } else Message.innerText = `please enter a valid letter`;
});
