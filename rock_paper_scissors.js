const player = { points: 0, currentChoice: null };
const computer = { points: 0, currentChoice: null };

const gameOptions = ["Lapis", "Papyrus", "Scalpellus "];

function computerChooses() {
  computer.currentChoice = gameOptions[Math.floor(Math.random() * 3)];
  return computer.currentChoice;
}
//computerChooses();

// computer.currentChoice = gameOptions[Math.floor(Math.random() * 3)];
//player.currentChoice = gameOptions[Math.floor(Math.random() * 3)];

// get user input from the DOM and assign to player.currentChoice

function createHTML(whoWon) {
  const gameResult = document.createElement("p");
  const resultsDiv = document.createElement("div");
  resultsDiv.className = "results-container";
  gameResult.innerText =
    whoWon +
    " The computer chose " +
    computer.currentChoice +
    " and the player chose " +
    player.currentChoice +
    ".";
  resultsDiv.append(gameResult);
  document.querySelector("body").appendChild(resultsDiv);
}

function resetHTML() {
  player.currentChoice = null;
  let items2remove = document.querySelectorAll(".results-container");
  for (let i = 0; i < items2remove.length; i++) items2remove[i].remove();
}

function compareChoices() {
  //Conditionals: one to test a tie and one for each of the three possible choices the computer could make
  if (computer.currentChoice === player.currentChoice) {
    //it's a tie
    // console.log("It's a tie!");
    const resultString = "It's a tie!";
    createHTML(resultString);
  }

  // 0 =>"Rock", 1 =>"Paper", 2 =>"Scissors"
  // computer chose Rock
  else if (computer.currentChoice === gameOptions[0]) {
    // player chose Paper
    if (player.currentChoice === gameOptions[1]) {
      //player wins
      // console.log(
      //   "The player wins! The computer chose " +
      //     computer.currentChoice +
      //     " and the player chose " +
      //     player.currentChoice +
      //     "."
      // );
      const resultString = "The player wins!";
      createHTML(resultString);
    }
    // player chose Scissors
    else if (player.currentChoice === gameOptions[2]) {
      //   computer wins
      // console.log(
      //   "The computer wins! The computer chose " +
      //     computer.currentChoice +
      //     " and the player chose " +
      //     player.currentChoice +
      //     "."
      // );
      const resultString = "The computer wins!";
      createHTML(resultString);
    }
  }

  // 0 =>"Rock", 1 =>"Paper", 2 =>"Scissors"
  // computer chose Paper
  else if (computer.currentChoice === gameOptions[1]) {
    //  Player chose Rock
    if (player.currentChoice === gameOptions[0]) {
      //computer wins
      // console.log(
      //   "The computer wins! The computer chose " +
      //     computer.currentChoice +
      //     " and the player chose " +
      //     player.currentChoice +
      //     "."
      // );
      const resultString = "The computer wins!";
      createHTML(resultString);
    }
    //   PLayer chose scissors
    else if (player.currentChoice === gameOptions[2]) {
      //   player wins
      // console.log(
      //   "The player wins! The computer chose " +
      //     computer.currentChoice +
      //     " and the player chose " +
      //     player.currentChoice +
      //     "."
      // );
      const resultString = "The player wins!";
      createHTML(resultString);
    }
  }

  // 0 =>"Rock", 1 =>"Paper", 2 =>"Scissors"
  // computer chose Scissors
  else if (computer.currentChoice === gameOptions[2]) {
    if (player.currentChoice === gameOptions[0]) {
      //player wins
      // console.log(
      //   "The player wins! The computer chose " +
      //     computer.currentChoice +
      //     " and the player chose " +
      //     player.currentChoice +
      //     "."
      // );
      const resultString = "The player wins!";
      createHTML(resultString);
    }
    //   PLayer chose scissors
    else if (player.currentChoice === gameOptions[1]) {
      //   computer wins
      // console.log(
      //   "The computer wins! The computer chose " +
      //     computer.currentChoice +
      //     " and the player chose " +
      //     player.currentChoice +
      //     "."
      // );
      const resultString = "The computer wins!";
      createHTML(resultString);
    }
  }
}

// compareChoices();

function userInput(event) {
  // console.log(event.target.id);
  // console.log(typeof event.target.value);

  if (event.target.value === "Lapis") {
    player.currentChoice = gameOptions[0];
    player.currentChoice;
  } else if (event.target.value === "Papyrus") {
    player.currentChoice = gameOptions[1];
    player.currentChoice;
  } else if (event.target.value === "Scalpellus") {
    player.currentChoice = gameOptions[2];
    player.currentChoice;
  } else if (event.target.id === "reset") {
    resetHTML();
  }
  computerChooses();
  compareChoices();
}

document.addEventListener("DOMContentLoaded", function (event) {
  const theLapisButton = document.getElementById("userLapis");
  const thePapyrusButton = document.getElementById("userPapyrus");
  const theScalpellusButton = document.getElementById("userScalpellus");
  const theResetButton = document.getElementById("reset");

  theLapisButton.addEventListener("click", userInput);
  thePapyrusButton.addEventListener("click", userInput);
  theScalpellusButton.addEventListener("click", userInput);
  theResetButton.addEventListener("click", userInput);
});
