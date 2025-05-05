// Create two new variables named humanScore and computerScore in the global scope
// Initialize those variables with the value of 0
let humanScore = 0;
let computerScore = 0;

// Create function getComputerChoice to generate random computer choice
// Function should randomly return any of the ff: "rock", "paper", "scissors"
    // Hint: use Math.random() method

function getComputerChoice() {
    // Use min and max inclusive for flexibility
    const min = 1;
    const max = 3;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber === 1) {
        return("rock");
    }
    else if (randomNumber === 2) {
        return("paper");
    }
    else { // Also the condition for when user clicks OK with no input 
        return("scissor");
    }
}

// Test function if it works- console.log(getComputerChoice());

// Create function getHumanChoice to get human player input and return it
    // Hint: use prompt() method
function getHumanChoice() {
    let userInput = prompt("Rock, paper, or scissor?"); // renamed to userInput for clarity
    if (userInput.toLowerCase() === "rock") { // toLowerCase() makes input case-insensitive
        return("rock");
    }
    else if (userInput.toLowerCase() === "paper") {
        return("paper");
    }
    else {
        return("scissor");
    }
}

// Test function if it returns - console.log(getHumanChoice());

// Create a new function named playRound
// Define two parameters for playRound: humanChoice and computerChoice

// Create a new function named playGame
// Move your playRound function and score variables so that they’re declared inside of the new playGame function

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie! No score counted");
        } 
        else if (humanChoice === "rock") {
            if (computerChoice === "scissor") {
                // Display a string value representing the round winner via console.log (e.g. "You lose! Paper beats Rock")
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                // Increment the humanScore or computerScore variable based on the round winner
                humanScore++;
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
        }
        else if (humanChoice === "scissor") {
            if (computerChoice === "paper") {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
        }
    }
    
    // create helper function to determine number of rounds
    function gameRounds(numberOfRounds) {
        // repeat number of rounds 5 times, think of iteration without using a loop
        if (numberOfRounds > 3) { // if it gets to the last round
            // announce result of humanScore vs computerScore
            if (humanScore > computerScore) {
                console.log("\nYou won the game! Congratulations!!");
            }
            else if (humanScore < computerScore) {
                console.log("\nYou lost the game. Better luck next time.");
            }
            else {
                console.log("\nIt's a tie! Try again?");
            }
            return;
        }

        console.log(`\nRound ${numberOfRounds}`);

        // You need to recall the choice functions to get new choices for each round
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log("You chose:", humanSelection);
        console.log("Computer chose:", computerSelection);

        playRound(humanSelection, computerSelection);

        // Keep track of score
        console.log(`Score this round - You: ${humanScore}, Computer: ${computerScore}`);

        gameRounds(numberOfRounds + 1);
    }
    // Start with 1st round - reason why value is set to 1
    gameRounds(1);

    // Alternative solution, countdown option
    /* function gameRound(roundsLeft) {
        // Declare a winner by the end
        if (roundsLeft === 0) {
            console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
            if (humanScore > computerScore) {
                console.log("You won the game!");
            }
            else if (humanScore < computerScore) {
                console.log("You lost the game.");
            }
            else {
                console.log("It's a tie!");
            }
            return;
        }
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log("You chose:", humanSelection);
        console.log("Computer chose:", computerSelection);

        playRound(humanSelection, computerSelection);

        // Keep track of score
        console.log(`Score this round - You: ${humanScore}, Computer: ${computerScore}`);

        gameRound(roundsLeft - 1);
    }
    // Play 5 rounds by calling playRound 5 times
    gameRound(5); */
}

playGame();