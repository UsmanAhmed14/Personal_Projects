let randomNumer = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); //.value property retrieves value inputted by the USER in form
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number, more than 1");
  } else if (guess > 100) {
    alert("Please enter a number, less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumer}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randomNumer) {
    displayMessage("You guessed it right !");
    endGame();
  } else if (guess < randomNumer) {
    displayMessage("Number is TOO low");
  } else if (guess > randomNumer) {
    displayMessage("Number is TOO high");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<H2 id = "newGame">Start new Game<H2/>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumer = parseInt(Math.random() * 100 + 1);

    playGame = true;
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuesses}`;
    userInput.removeAttribute("disable");
    startOver.removeChild(p);
  });
}
