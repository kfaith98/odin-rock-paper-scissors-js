// Create function to generate random computer choice
// Function should randomly return any of the ff: "rock", "paper", "scissors"
    // Hint: use Math.random() method

function randomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

function getComputerChoice() {
    let choice = randomNumber(1,3);
    if (choice === 1) {
        return("rock");
    }
    else if (choice === 2) {
        return("paper");
    }
    else {
        return("scissor");
    }
}

// Test function if it works
console.log(getComputerChoice());
