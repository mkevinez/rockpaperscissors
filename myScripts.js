// let choiceArray = ["rock", "paper", "scissors"]

// var winCount = 0;
// var lossCount = 0;
// var tieCount = 0;

// var userPick;
// var cpuPick;

// for (i=1; i<=5; i++) {
//     userPick = window.prompt("Type in rock, paper or scissors").toLowerCase();
//     cpuPick = getComputerChoice();
//     matchResult(userPick, cpuPick);
// }

// if (winCount > lossCount) {
//     console.log("You win!");
// } else {
//     console.log ("You lose!");
// }

// // HELPER FUNCTIONS

// function getComputerChoice() {
//     let randomNum = Math.floor(Math.random()*100)
//     console.log(randomNum)
//     let choiceIndex = randomNum % 3
//     return choiceArray[choiceIndex]
// }

// function matchResult(userPick, cpuPick) {
//     console.log(userPick);
//     console.log(cpuPick);
//     if ((userPick == 'rock' && cpuPick == 'paper') || (userPick == 'paper' && cpuPick == 'scissors')
//     || (userPick == 'scissors' && cpuPick == 'rock')) {
//         lossCount += 1;
//     } else if ((userPick == 'rock' && cpuPick == 'scissors') || (userPick == 'paper' && cpuPick == 'rock')
//     || (userPick == 'scissors' && cpuPick == 'paper')) {
//         winCount += 1;
//     } else {
//         tieCount += 1;
//     }
// }



const userSelectionButtons = document.querySelectorAll('.user-selection-button');

const scoreCount = {
    "wins": 0,
    "losses": 0,
    "ties": 0
}

let statusDisplay = document.querySelector('#status-message');
let scoreDisplay = document.querySelector('#score-text');

let gameWon = false;

console.log(scoreCount);

userSelectionButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(button.dataset.userSelection);
        matchResult = playGame(button.dataset.userSelection);
        console.log(matchResult);
        console.log(scoreCount);
        scoreDisplay.textContent = `${scoreCount.wins} - ${scoreCount.losses}`;
        if (matchResult == "win") {
            statusDisplay.textContent = "You won this match! Go again.";
        } else if (matchResult == "loss") {
            statusDisplay.textContent = "You lost this match! Go again.";
        } else {
            statusDisplay.textContent = "Tie! Go again."
        }
        let gameWon = checkForWin();
        console.log(gameWon);
    })
})

function playGame(userChoice) {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    if ((userChoice == 'rock' && computerChoice == 'paper') || (userChoice == 'paper' && computerChoice == 'scissors')
    || (userChoice == 'scissors' && computerChoice == 'rock')) {
        scoreCount.losses++;
        return "loss";
    } else if ((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock')
    || (userChoice == 'scissors' && computerChoice == 'paper')) {
        scoreCount.wins++;
        return "win";
    } else {
        scoreCount.ties++;
        return "tie"
    }  
}

function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
    return choices[(Math.floor(Math.random() * 100)) % 3]
}

function checkForWin() {
    for (const key in scoreCount) {
        if (scoreCount[key] == 5) {
            return true;
        }
    }
    return false;
}