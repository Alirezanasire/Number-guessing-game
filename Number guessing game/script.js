const guessForm = document.querySelector('form');
const guessInput = document.querySelector('#guess-input');
const resultDiv = document.querySelector('#result');

const randomNumber = Math.floor(Math.random() * 100) + 1;

guessForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const userGuess = parseInt(guessInput.value);
  if(userGuess === randomNumber) {
    resultDiv.textContent = 'congratulations! You guessed the number.';
  } else if (userGuess > randomNumber) {
    resultDiv.textContent = 'The number you guessed is bigger than the desired number.';
  } else {
    resultDiv.textContent = 'The number you guessed is smaller than the desired number.';
  }
});