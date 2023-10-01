function playerSelection() {
  playerChoice = String(prompt("Please enter your choice:")).toLowerCase();
  return playerChoice;
}


function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 2);
  if(computerChoice === 0){
    return "rock"
  } else if(computerChoice === 1){
    return "paper"
  } else if(computerChoice === 2){
    return "scissors"
  }
}
getComputerChoice();

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
      return "it's a tie";
    } else if(
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ){
      return "You win";
    } else{
      return "Computer win";
    }
}

setTimeout(() => {
  document.location.reload();
}, 5000);
const getPlayerSelection = playerSelection();
const computerSelection = getComputerChoice();
console.log(`Player chosse: ${getPlayerSelection}`);
console.log(`Computer choose: ${computerSelection}`)
console.log(playRound(getPlayerSelection, computerSelection))
