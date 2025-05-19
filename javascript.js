let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const min = 1;
    const max = 3;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber === 1) {
        return("rock");
    }
    else if (randomNumber === 2) {
        return("paper");
    }
    else {
        return("scissors");
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playGame("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playGame("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playGame("scissors");
});

function playGame(humanSelection) {
    function playRound(humanSelection, computerChoice) {
        if (humanSelection === computerChoice) {
            console.log("It's a tie! No score counted");
        } 
        else if (humanSelection === "rock") {
            if (computerChoice === "scissors") {
                console.log(`You win! ${humanSelection} beats ${computerChoice}`);
                humanScore++;
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanSelection}`);
                computerScore++;
            }
        }
        else if (humanSelection === "paper") {
            if (computerChoice === "rock") {
                console.log(`You win! ${humanSelection} beats ${computerChoice}`);
                humanScore++;
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanSelection}`);
                computerScore++;
            }
        }
        else if (humanSelection === "scissors") {
            if (computerChoice === "paper") {
                console.log(`You win! ${humanSelection} beats ${computerChoice}`);
                humanScore++;
            }
            else {
                console.log(`You lose! ${computerChoice} beats ${humanSelection}`);
                computerScore++;
            }
        }
    }

    let computerChoice = getComputerChoice();

    console.log("You chose:", humanSelection);
    console.log("Computer chose:", computerChoice);

    playRound(humanSelection, computerChoice);
    
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}