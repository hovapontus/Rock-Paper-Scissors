const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = checkWinner(playerSelection, computerSelection);
  let resultMessage;

  if (result === "Tie") {
    resultMessage = "It's a Tie!";
  } else if (result === "Player") {
    resultMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    resultMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = resultMessage;

  updateScore(result);
}

function updateScore(result) {
  const scoreDiv = document.getElementById("score");
  const playerScoreSpan = document.getElementById("player-score");
  const computerScoreSpan = document.getElementById("computer-score");

  let playerScore = parseInt(playerScoreSpan.textContent);
  let computerScore = parseInt(computerScoreSpan.textContent);

  if (result === "Player") {
    playerScore++;
  } else if (result === "Computer") {
    computerScore++;
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  if (playerScore === 5) {
    scoreDiv.textContent = "Player Wins!";
    disableButtons();
  } else if (computerScore === 5) {
    scoreDiv.textContent = "Computer Wins!";
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll("#container button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function initialize() {
  const buttons = document.querySelectorAll("#container button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(button.id);
    });
  });
}

initialize();
