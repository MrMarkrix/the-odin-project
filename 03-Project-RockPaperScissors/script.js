let userScore = 0;
let computerScore = 0;

function theGame(){

  function computerRandom() {
    const choices = ["Rock", "Paper", "Scissors"];

    const randomRandom = Math.floor(Math.random() * choices.length);

    return choices[randomRandom];
  };

  //The function generates a random index using Math.random() 
  //multiplied by the length of the choices array (choices.length)
  //It then returns the string value at the randomly generated index from the choices array.

  function userInput() {
    const choices = ["Rock", "Paper", "Scissors"];
    let userInput = prompt("Choose your weapon (Rock, Paper, Scissors)!:");
    
    // Validate user input,
    // while creates a loop, that checks if userInput is within Choices
    // if not the loop again
    
    while (choices.includes(userInput) === false) {
      userInput = prompt("Input is Case-sensetive. Please choose Rock, Paper, or Scissors:");
    }
    return userInput;
  };

  //Function prompts the user to choose a weapon (Rock, Paper, or Scissors)
  //It then validates the user"s input by checking if it is included in the choices array
  //If the user enters an invalid input, the function will continue to prompt until a valid input is provided.

while (userScore <3 && computerScore <3){

  const computerChoice = computerRandom();
  const userChoice = userInput();

  console.log ("User: ", userChoice);
  console.log ("Computer:", computerChoice);

  if (userChoice === computerChoice) {
    alert("It's a draw!"); 
    console.log("It's a draw!");}
    
    else if (userChoice === "Rock" && computerChoice === "Scissors") {
      console.log("You Win! Your Rock smashed the Scissors!");
      alert("You Win! Your Rock smashed the Scissors!");
      userScore++;
    }
    
    else if (userChoice === "Rock" && computerChoice === "Paper") {
      console.log("You Lose! Your Rock was wrapped by Paper!");
      alert("You Lose! Your Rock was wrapped by Paper!");
      computerScore++;c
    }

    else if (userChoice === "Paper" && computerChoice === "Rock") {
      console.log("You Win! Your Paper wrapped the Rock!");
      alert("You Win! Your Paper wrapped the Rock!");
      userScore++;
    } 
      
    else if (userChoice === "Paper" && computerChoice === "Scissors") {
      console.log("You Lose! Your Paper was sciced by Scissors!");
      alert("You Lose! Your Paper was sciced by Scissors!");
      computerScore++;
    }

    else if (userChoice === "Scissors" && computerChoice === "Paper") {
      console.log("You Win! Your Scissors sliced the Paper!");
      alert("You Win! Your Scissors sliced the Paper!");
      userScore++;
    } 
        
    else if (userChoice === "Scissors" && computerChoice === "Rock") {
      console.log("You Lose! Your Scissors were smashed by Rock!");
      alert("You Lose! Your Scissors were smashed by Rock!");
      computerScore++;
    }
  }
  
  if (userScore === 3) {
    alert("Congratulations! You won the game! Check the Console for results.");
    console.log("Congratulations! You won the game!");
  } else {
    alert("Oops! The Computer won the game! Check the Console for results.");
    console.log("Oops! The Computer won the game!");
  }
}

theGame()