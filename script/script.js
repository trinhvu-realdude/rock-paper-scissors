const choices = document.querySelectorAll("button");

const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

const computerResult = document.getElementById("computer");
const userResult = document.getElementById("user");

const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener("click", (e) => { 
    userChoice = e.target.id; 
    
    switch (userChoice) {
        case ROCK:
            userChoiceDisplay.innerHTML = "✊";
            break;

        case PAPER:
            userChoiceDisplay.innerHTML = "✋";
            break;

        case SCISSOR:
            userChoiceDisplay.innerHTML = "✌";
            break;
    }

    generateComputerChoice();
}));

function generateComputerChoice() {
    const numberChoice = Math.floor((Math.random() * 3) + 1);
    
    switch (numberChoice) {
        case 1:
            computerChoice = ROCK;
            computerChoiceDisplay.innerHTML = "✊";
            break;

        case 2:
            computerChoice = PAPER;
            computerChoiceDisplay.innerHTML = "✋";
            break;

        case 3:
            computerChoice = SCISSOR;
            computerChoiceDisplay.innerHTML = "✌";
            break;
    }

    generateResult();
}

function generateResult() {
    if (userChoice === computerChoice) {
        computerResult.innerHTML = DRAW;
        userResult.innerHTML = DRAW;
    } 

    switch (userChoice) {
        case ROCK:
            if (computerChoice === PAPER) {
                computerResult.innerHTML = WIN;
                userResult.innerHTML = LOSE;
                computerScore++;
            }

            if (computerChoice === SCISSOR) {
                computerResult.innerHTML = LOSE;
                userResult.innerHTML = WIN;
                userScore++;
            }
            break;

        case PAPER:
            if (computerChoice === ROCK) {
                computerResult.innerHTML = LOSE;
                userResult.innerHTML = WIN;
                userScore++;
            }

            if (computerChoice === SCISSOR) {
                computerResult.innerHTML = WIN;
                userResult.innerHTML = LOSE;
                computerScore++;
            }
            break;

        case SCISSOR:
            if (computerChoice === PAPER) {
                computerResult.innerHTML = LOSE;
                userResult.innerHTML = WIN;
                userScore++;
            }

            if (computerChoice === ROCK) {
                computerResult.innerHTML = WIN;
                userResult.innerHTML = LOSE;
                computerScore++;
            }
            break;
    }

    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}

