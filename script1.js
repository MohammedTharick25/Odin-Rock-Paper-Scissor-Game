function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissor";
}

function getHumanChoice() {
  let userInput = prompt("Enter rock, paper or scissor");
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissor"
  ) {
    return userInput;
  } else {
    console.log("Invalid input! Please enter rock, paper or scissor.");
    return getHumanChoice();
  }
}

humanScore = 0;
computerScore = 0;
tie = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    tie++;
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("Round " + (i + 1) + ":");
    console.log("Computer choice: " + computerChoice);
    console.log("Human choice: " + humanChoice);
    console.log(playRound(humanChoice, computerChoice));
  }
}
playGame();
console.log(
  "Final Scores - Human: " +
    humanScore +
    ", Computer: " +
    computerScore +
    ", Ties: " +
    tie
);
