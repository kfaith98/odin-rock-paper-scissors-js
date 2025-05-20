let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const min = 1;
    const max = 3;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber === 1) {
        return("Rock");
    }
    else if (randomNumber === 2) {
        return("Paper");
    }
    else {
        return("Scissors");
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playGame("Rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playGame("Paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playGame("Scissors");
});

function playGame(humanSelection) {
    function playRound(humanSelection, computerChoice) {
        const result = document.querySelector(".result p");

        if (humanSelection === computerChoice) {
            result.textContent = "It's a tie! No score counted";
        } 
        else if (humanSelection === "Rock") {
            if (computerChoice === "Scissors") {
                result.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
                humanScore++;
            }
            else {
                result.textContent = `You lose! ${computerChoice} beats ${humanSelection}`;
                computerScore++;
            }
        }
        else if (humanSelection === "Paper") {
            if (computerChoice === "Rock") {
                result.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
                humanScore++;
            }
            else {
                result.textContent = `You lose! ${computerChoice} beats ${humanSelection}`;
                computerScore++;
            }
        }
        else if (humanSelection === "Scissors") {
            if (computerChoice === "Paper") {
                result.textContent = `You win! ${humanSelection} beats ${computerChoice}`;
                humanScore++;
            }
            else {
                result.textContent = `You lose! ${computerChoice} beats ${humanSelection}`;
                computerScore++;
            }
        }
    }

    const computerChoice = getComputerChoice();

    const userChoice = document.querySelector("#user-choice p");
    userChoice.textContent = `You chose: ${humanSelection}`;

    const computerSelection = document.querySelector("#computer-choice p");
    computerSelection.textContent = `Computer chose: ${computerChoice}`;

    playRound(humanSelection, computerChoice);

    const userScore = document.querySelector("#user-score p");
    userScore.textContent = `Your score: ${humanScore}`;

    const compScore = document.querySelector("#computer-score p");
    compScore.textContent = `Computer's score: ${computerScore}`;

    const result = document.querySelector(".result p");
    if (humanScore === 5 || computerScore === 5) { 
        if (humanScore > computerScore) {
            result.textContent = "You won the game! Congratulations!!";
        }
        else if (humanScore < computerScore) {
            result.textContent = "You lost the game. Better luck next time.";
        }
        else {
            result.textContent = "It's a tie! Try again?";
        }
    
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        const resetButton = document.querySelector("#reset");
        resetButton.style.display = "inline";
    }
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    document.querySelector("#user-score p").textContent = "Your score: 0";
    document.querySelector("#computer-score p").textContent = "Computer's score: 0";
    document.querySelector("#user-choice p").textContent = "You chose: ";
    document.querySelector("#computer-choice p").textContent = "Computer chose: ";
    document.querySelector(".result p").textContent = "";

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    resetButton.style.display = "none";
});
