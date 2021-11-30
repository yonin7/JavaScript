// letter = random(a-z)
// guesses = []
// gameOver = false

// function guessMyLetter(){
//         while(!gameOver)
//  guess = getInputFromUser().toLowerCase()
//  if(!isValid(guess))
//        display(“Enter only letters between a-z”, red)

//    else if(guesses.includes(guess))
//        display(“you already guessed this letter”, red)

//    else if(letter === guess)
//        display(“you guessed it”, green)
//        gameOver = victory()

//                 else
//        display(“Nope, wrong letter”, red)
//        add geuss to guesses array -> guesses.push(guess)

//      print guesses array in div -> div.innerTet = guesses.toString()

// function display(str, color)
// set h2 innerText to str -> h2.innerText = str
// set h2 color to color -> h2.style.color = color

// function victory()
// h5.innerText = “would you like to play again?”
// set letter container innerText to ‘guess’ -> letter.innerText = ‘guess’
// btn = document.createElement(‘button’);
// btn.innerText = ‘Yes’
// disable keyboard
// btn.addEventListener(‘click’,playAgain)
// reset innerText for guesses div -> letter.innerText = ‘guess’
// div.appendChild(btn) -> add button to guesses div
// return true

// function playAgain()
// letter = random(a-z)
// guesses = []
// gameOver = false
// reset text elements
// call function

// function isValid(letter)
// return if letter is between a-z

const letter = document.querySelector('.letter');
const Message = document.querySelector('.displayMessage');
const keysGuessedEl = document.querySelector('.keysguessed');
const Guesses = document.querySelector('.guesses');
const arrGuesses = [];
const rendomLetter = Math.random().toString(36).substring(2, 3);
const buttonEl = document.createElement('button');
console.log(rendomLetter);

document.addEventListener('keypress', (e) => {
  const smallLetter = e.key.toLowerCase();
  console.log(smallLetter);
  if (smallLetter.charCodeAt() > 96 && smallLetter.charCodeAt() < 123) {
    letter.innerText = smallLetter;
    if (!arrGuesses.includes(smallLetter)) {
      if (smallLetter === rendomLetter) {
        Message.innerText = `Right letter!`;
        keysGuessedEl.innerText = 'Would you like to play again?';
        buttonEl.innerText = 'Yes';
        Guesses.innerHTML = buttonEl.key;
      } else {
        Message.innerText = `${smallLetter} Nope, wrong letter`;
        arrGuesses.push(smallLetter);
        Guesses.innerText = arrGuesses.join();
      }
    } else Message.innerText = `${smallLetter} has already been guessed!`;
  } else Message.innerText = `please enter a valid letter`;
});
