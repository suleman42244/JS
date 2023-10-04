const robotChoices = ["Rock", "Paper", "Scissors"];

function randomRobotChoice() {
  const robotOption = Math.floor(Math.random() * robotChoices.length);
  return robotChoices[robotOption];
}


function determineResults(playerChoose, robotChoice){
  if(playerChoose === robotChoice){
    return 'Tie!'
  }  else if (
    (playerChoose === 'rock' && robotChoice === 'scissors') ||
    (playerChoose === 'paper' && robotChoice === 'rock') ||
    (playerChoose === 'scissors' && robotChoice === 'paper')
) {
  return 'You won';
} else{
  return 'Robot won';
}
}


function updateGame(playerChoose) {
  const robotChoice = randomRobotChoice();
  const robotElement = document.querySelector("#robot-choice");
  const resultTextElement = document.querySelector('.result-element');
  robotElement.textContent = robotChoice;

  const result = determineResults(playerChoose, robotChoice.toLowerCase())

  
  resultTextElement.textContent = `${result}`;
}


const playerChoice = document.querySelectorAll(".choice-image");
playerChoice.forEach((Image) => {
  Image.addEventListener("click", () => {
    const playerChoose = Image.classList.contains("rock")
      ? "rock"
      : Image.classList.contains("paper")
      ? 'paper'
      : 'scissors';
    Image.classList.add("pressed");
    updateGame(playerChoose);
    setTimeout(() => {
      Image.classList.remove("pressed");
    }, 200);
  });
});
