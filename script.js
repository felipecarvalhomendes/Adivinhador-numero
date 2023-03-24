let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let integer = Math.floor(Math.random() * 10);
    return integer;
}

const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
    let humanPlay = Math.abs(secretTargetNumber - humanGuess);
    let computerPlay = Math.abs(secretTargetNumber - computerGuess);
    if (humanPlay <= computerPlay) {
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
