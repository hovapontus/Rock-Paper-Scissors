function getComputerChoice() {
    var options = ["Rock", "Paper", "Scissors"];
    var choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Its a tie! Both picked ${playerSelection}`;
   
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! rock beats scissors";
  
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock";
   
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win scissors beats paper";
    } else {
        return `You lose! ${computerSelection} beats 
        ${playerSelection}
    }
}
const playerSelection = prompt("Pick among Rock, Paper, Scissors").toLowerCase();
const computerSelection = computerPlay();
