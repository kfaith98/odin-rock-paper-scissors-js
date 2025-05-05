// Create two new variables named humanScore and computerScore in the global scope
// Initialize those variables with the value of 0
let humanScore = 0;
let computerScore = 0;


// Create function getComputerChoice to generate random computer choice
// Function should randomly return any of the ff: "rock", "paper", "scissors"
    // Hint: use Math.random() method

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        return("rock");
    }
    else if (randomNumber === 2) {
        return("paper");
    }
    else {
        return("scissor");
    }
}

// Test function if it works- console.log(getComputerChoice());

// Create function getHumanChoice to get human player input and return it
    // Hint: use prompt() method
function getHumanChoice() {
    let input = prompt("Rock, paper, or scissor?");
    if (input.toLowerCase() === "rock") { // toLowerCase() makes input case-insensitive
        return("rock");
    }
    else if (input.toLowerCase() === "paper") {
        return("paper");
    }
    else {
        return("scissor");
    }
}

// Test function if it returns - console.log(getHumanChoice());

// Create a new function named playRound
// Define two parameters for playRound: humanChoice and computerChoice

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Player chose:", humanSelection);
console.log("Computer chose:", computerSelection);

playRound(humanSelection, computerSelection);