let choiceArray = ["rock", "paper", "scissors"]

var winCount = 0;
var lossCount = 0;
var tieCount = 0;

var userPick;
var cpuPick;

for (i=1; i<=5; i++) {
    userPick = window.prompt("Type in rock, paper or scissors").toLowerCase();
    cpuPick = getComputerChoice();
    matchResult(userPick, cpuPick);
}

if (winCount > lossCount) {
    console.log("You win!");
} else {
    console.log ("You lose!");
}

// HELPER FUNCTIONS

function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100)
    console.log(randomNum)
    let choiceIndex = randomNum % 3
    return choiceArray[choiceIndex]
}

function matchResult(userPick, cpuPick) {
    console.log(userPick);
    console.log(cpuPick);
    if ((userPick == 'rock' && cpuPick == 'paper') || (userPick == 'paper' && cpuPick == 'scissors')
    || (userPick == 'scissors' && cpuPick == 'rock')) {
        lossCount += 1;
    } else if ((userPick == 'rock' && cpuPick == 'scissors') || (userPick == 'paper' && cpuPick == 'rock')
    || (userPick == 'scissors' && cpuPick == 'paper')) {
        winCount += 1;
    } else {
        tieCount += 1;
    }
}