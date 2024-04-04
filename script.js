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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

const winner = document.querySelector("#winner");

const playerScoreElement = document.querySelector("#player");
playerScoreElement.textContent += ` ${playerScore}`;

const computerScoreElement = document.querySelector("#cpu");
computerScoreElement.textContent += ` ${computerScore}`;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector(".results");

rock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();

  const result = document.createElement("p");
  result.textContent = playRound("Rock", computerSelection);
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
  result.textContent = playRound("Paper", computerSelection);
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
  result.textContent = playRound("Scissors", computerSelection);
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
      playerScoreElement.textContent = `Player's Score: ${playerScore}`;
      break;
    case "computer":
      computerScore++;
      computerScoreElement.textContent = `Computer's Score: ${computerScore}`;
      break;
  }

  if (playerScore === 5) {
    winner.textContent = "You have Won!!!";
  } else if (computerScore === 5) {
    winner.textContent = "Computer has Won!!!";
  }
}
