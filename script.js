function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 9);

  if (randomNumber < 3) {
    return "Rock";
  } else if (randomNumber >= 3 && randomNumber < 6) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function capitalize(text) {
  const firstLetterUpperCase = text.charAt(0).toUpperCase();
  const restOfText = text.slice(1);

  return firstLetterUpperCase + restOfText;
}

function playRound(playerSelection, computerSelection) {
  const formatedPlayerSelection = capitalize(playerSelection).trim();

  if (formatedPlayerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    formatedPlayerSelection === "Rock" &&
    computerSelection === "Scissors"
  ) {
    return "You Win! Rock beats Scissors";
  } else if (
    formatedPlayerSelection === "Paper" &&
    computerSelection === "Rock"
  ) {
    return "You Win! Paper beats Rock";
  } else if (
    formatedPlayerSelection === "Scissors" &&
    computerSelection === "Paper"
  ) {
    return "You Win! Scissors beats Paper";
  } else if (
    formatedPlayerSelection === "Rock" &&
    computerSelection === "Paper"
  ) {
    return "You Lose! Paper beats Rock";
  } else if (
    formatedPlayerSelection === "Paper" &&
    computerSelection === "Scissors"
  ) {
    return "You Lose! Scissors beats Paper";
  } else if (
    formatedPlayerSelection === "Scissors" &&
    computerSelection === "Rock"
  ) {
    return "You Lose! Rock beats Scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

const winner = document.querySelector("#winner");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector(".results");

rock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();

  const result = document.createElement("p");
  result.textContent = playRound("rock", computerSelection);
  if (result.textContent.slice(4, 8) === "Win!") {
    playGame("player");
  } else if (result.textContent.slice(4, 8) === "Lose") {
    playGame("computer");
  }
  results.appendChild(result);
});

paper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();

  const result = document.createElement("p");
  result.textContent = playRound("paper", computerSelection);
  if (result.textContent.slice(4, 8) === "Win!") {
    playGame("player");
  } else if (result.textContent.slice(4, 8) === "Lose") {
    playGame("computer");
  }
  results.appendChild(result);
});

scissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();

  const result = document.createElement("p");
  result.textContent = playRound("scissors", computerSelection);
  if (result.textContent.slice(4, 8) === "Win!") {
    playGame("player");
  } else if (result.textContent.slice(4, 8) === "Lose") {
    playGame("computer");
  }
  results.appendChild(result);
});

function playGame(roundWinner) {
  switch (roundWinner) {
    case "player":
      playerScore++;
      break;
    case "computer":
      computerScore++;
      break;
  }

  if (playerScore === 5) {
    winner.textContent = "You have Won!!!";
  } else if (computerScore === 5) {
    winner.textContent = "Computer has Won!!!";
  }
}