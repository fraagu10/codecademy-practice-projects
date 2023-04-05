let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = function(human, computer, target) {
    if(Math.abs(target - human) <= Math.abs(target - computer)) {
        return true;
    }

    return false;
}

function updateScore(winner) {
    if(winner === "human") {
        humanScore++;
    } else if(winner === "computer") {
        computerScore++;
    } 
}

function advanceRound() {
    currentRoundNumber++;
}

