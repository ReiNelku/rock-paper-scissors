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

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Type your choice: ");
    const computerSelection = getComputerChoice();

    const round = playRound(playerSelection, computerSelection);
    console.log(round);
    if (round.slice(4, 8) === "Win!") {
      playerScore += 1;
    } else if (round.slice(4, 8) === "Lose") {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    console.log("You are the Winner!!!");
  } else if (computerScore > playerScore) {
    console.log("You have Lost!");
  } else {
    console.log("Game ends with a Tie.");
  }
}

playGame();
