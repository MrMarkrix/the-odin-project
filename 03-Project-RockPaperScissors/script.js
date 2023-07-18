let userScore = 0;
let computerScore = 0;

const choicesContainer = document.getElementById('choices');
const resultElement = document.querySelector('.result');
const userScoreElement = document.querySelector('.userScore');
const computerScoreElement = document.querySelector('.computerScore');
const resetButton = document.getElementById('reset');

function theGame() {
  let userInput = "";
  let computerRandom = "";

  function UserChoice() {
    const choices = document.querySelectorAll('#choices button');
    choices.forEach((choice) => {
      choice.addEventListener('click', () => {
        userInput = choice.textContent;
        computerChoice();
        playRound();
      });
    });
  }

  function computerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerRandom = choices[randomIndex];
  }

  function playRound() {
    if (userScore === 3 || computerScore === 3) {
      return; // Stop further execution if either score reaches 3
    }

    console.log("User: ", userInput);
    console.log("Computer: ", computerRandom);

    if (userInput === computerRandom) {
      resultElement.textContent = "It's a draw!";
      console.log("It's a draw!");
    } else if (userInput === "Rock" && computerRandom === "Scissors") {
      console.log("You Win! Your Rock smashed the Scissors!");
      resultElement.textContent = "You Win! Your Rock smashed the Scissors!";
      userScore++;
    } else if (userInput === "Rock" && computerRandom === "Paper") {
      console.log("You Lose! Your Rock was wrapped by Paper!");
      resultElement.textContent = "You Lose! Your Rock was wrapped by Paper!";
      computerScore++;
    } else if (userInput === "Paper" && computerRandom === "Rock") {
      console.log("You Win! Your Paper wrapped the Rock!");
      resultElement.textContent = "You Win! Your Paper wrapped the Rock!";
      userScore++;
    } else if (userInput === "Paper" && computerRandom === "Scissors") {
      console.log("You Lose! Your Paper was sliced by Scissors!");
      resultElement.textContent = "You Lose! Your Paper was sliced by Scissors!";
      computerScore++;
    } else if (userInput === "Scissors" && computerRandom === "Paper") {
      console.log("You Win! Your Scissors sliced the Paper!");
      resultElement.textContent = "You Win! Your Scissors sliced the Paper!";
      userScore++;
    } else if (userInput === "Scissors" && computerRandom === "Rock") {
      console.log("You Lose! Your Scissors were smashed by Rock!");
      resultElement.textContent = "You Lose! Your Scissors were smashed by Rock!";
      computerScore++;
    }

    userScoreElement.textContent = userScore.toString();
    computerScoreElement.textContent = computerScore.toString();

    if (userScore === 3) {
      resultElement.textContent = "Congratulations! You won the game! Check the Console for results.";
      console.log("Congratulations! You won the game!");
    } else if (computerScore === 3) {
      resultElement.textContent = "Oops! The Computer won the game! Check the Console for results.";
      console.log("Oops! The Computer won the game!");
    }
  }

  function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreElement.textContent = "0";
    computerScoreElement.textContent = "0";
    resultElement.textContent = "Result";
  }

  UserChoice();
  resetButton.addEventListener('click', resetGame);
}

theGame();
