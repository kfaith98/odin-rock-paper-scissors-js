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
        const result = document.querySelector(".result");

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

    const userChoice = document.querySelector("#user-choice");
    userChoice.textContent = `You chose: ${humanSelection}`;

    const computerSelection = document.querySelector("#computer-choice");
    computerSelection.textContent = `CPU chose: ${computerChoice}`;

    playRound(humanSelection, computerChoice);

    const userScore = document.querySelector("#user-score");
    userScore.textContent = `${humanScore}`;

    const compScore = document.querySelector("#computer-score");
    compScore.textContent = `${computerScore}`;

    const result = document.querySelector(".result");
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

        rock.classList.add("disabled");
        paper.classList.add("disabled");
        scissors.classList.add("disabled");
    }
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    document.querySelector("#user-score").textContent = "0";
    document.querySelector("#computer-score").textContent = "0";
    document.querySelector("#user-choice").innerHTML = "You chose:<br>?";
    document.querySelector("#computer-choice").innerHTML = "CPU chose:<br>?";
    document.querySelector(".result").textContent = "Awaiting result...";

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    rock.classList.remove("disabled");
    paper.classList.remove("disabled");
    scissors.classList.remove("disabled");
});