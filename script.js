let humanScore = 0;
let computerScore = 0;
let tie = 0;
let rounds = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  return choice === 1 ? "rock" : choice === 2 ? "paper" : "scissor";
}

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
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function updateUI(result, humanChoice, computerChoice) {
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;
  document.getElementById("tieScore").textContent = tie;
  document.getElementById("roundResult").textContent = result;

  // Update picks display with bounce animation
  const humanPickEl = document.getElementById("humanPick");
  const computerPickEl = document.getElementById("computerPick");

  humanPickEl.textContent = choiceIcon(humanChoice);
  computerPickEl.textContent = choiceIcon(computerChoice);

  // Trigger bounce animation
  humanPickEl.classList.remove("bounce");
  computerPickEl.classList.remove("bounce");
  void humanPickEl.offsetWidth; // force reflow
  void computerPickEl.offsetWidth;
  humanPickEl.classList.add("bounce");
  computerPickEl.classList.add("bounce");

  // Check if game ended
  if (humanScore === 5 || computerScore === 5) {
    let finalMessage = "";
    if (humanScore > computerScore) {
      finalMessage = "🏆 Congratulations! You won the game!";
    } else if (computerScore > humanScore) {
      finalMessage = "💻 The computer wins the game!";
    } else {
      finalMessage = "🤝 It's a draw!";
    }

    document.getElementById("finalResult").textContent = finalMessage;

    // Show reset button
    document.getElementById("resetBtn").style.display = "inline-block";
  }
}

function choiceIcon(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  if (choice === "scissor") return "✌️";
  return "-";
}

// Handle choice buttons
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    // Stop game if someone already reached 5 points
    if (humanScore === 5 || computerScore === 5) {
      return;
    }

    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    rounds++;
    updateUI(result, humanChoice, computerChoice);
  });
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  tie = 0;
  rounds = 0;

  document.getElementById("humanScore").textContent = 0;
  document.getElementById("computerScore").textContent = 0;
  document.getElementById("tieScore").textContent = 0;
  document.getElementById("roundResult").textContent = "Make your move!";
  document.getElementById("finalResult").textContent = "";
  document.getElementById("humanPick").textContent = "-";
  document.getElementById("computerPick").textContent = "-";
  document.getElementById("resetBtn").style.display = "none";
});
