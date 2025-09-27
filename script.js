function getComputerChoice() {
  let computerChoice;
  const choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      computerChoice = "Stone";
      return computerChoice;
    case 2:
      computerChoice = "Paper";
      return computerChoice;
    case 3:
      computerChoice = "Scissors";
      return computerChoice;
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice.");
  return humanChoice;
}
let winner = "";
let humanScore = 0;
let computerScore = 0;
function playGame(humanScore, computerScore) {
  function playRound(humanChoice, computerChoice) {
    const human = String(humanChoice).trim().toLowerCase();
    const machine = String(computerChoice).trim().toLowerCase();

    if (human === machine) {
      winner = "draw";
    } else if (
      (human == "stone" && machine == "scissors") ||
      (human == "paper" && machine == "stone") ||
      (human == "scissors" && machine == "paper")
    ) {
      winner = "human";
      alert("You won!")
    } else {
      winner = "machine";
      alert("You lost!")
    }
    console.log("your pick: " + human);
    console.log("computer pick: " + machine);
    console.log("the winner is: " + winner);
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    if (winner === "human") {
      humanScore += 1;
    } else {
      computerScore += 1;
    }
  }
  if (humanScore > computerScore) {
    console.log("You won!");
    alert("Winner winner chicken dinner!")
  } else {
    console.log("Machine won!");
    alert("You lost!")
  }
  
}


playGame(0,0);
