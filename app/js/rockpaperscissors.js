function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    console.log(randomNumber)
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    if ((move === null) || (move === undefined))
    {
        move = getInput();
    }
    else
    {
        move = move;
    }
    return move;
    }

function getComputerMove(move) {
    if ((move === null) || (move === undefined))
    {
        move = randomPlay();
    }
    else
    {
        move = move;
    }
    console.log("computer chooses", move)
    return move;
    }
    
function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === 'rock') && (computerMove === 'scissors')) {
        winner = 'player wins';
    }
    else if ((playerMove === 'rock') && (computerMove === 'paper')) {
        winner = 'computer wins';
    }
    else if ((playerMove === 'rock') && (computerMove === 'rock')) {
        winner = 'tie';
    }
    else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
        winner = 'computer wins';
    }
    else if ((playerMove === 'paper') && (computerMove === 'rock')) {
        winner = 'player wins';
    }
    else if ((playerMove === 'paper') && (computerMove === 'paper')) {
        winner = 'tie';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
        winner = 'computer wins';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
        winner = 'player wins';
    }
    else if ((playerMove === 'scissors') && (computerMove === 'scissors')) {
        winner = 'tie';
    }
    else {
        winner = null;
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player wins") {
            playerWins +=1; 
            }
        else   
        if (winner === "computer wins") {
              computerWins +=1;
        }  else      
        console.log('player chose' + ' ' + playerMove + ' ' + 'while computer chose' + ' ' + computerMove);
        console.log('the score is currently ' + playerWins + ' to ' + computerWins + '\n');
            }
        if (playerWins === 5) {
            console.log('player wins');
        } else if (computerWins === 5) {
            console.log('computer wins');
        }
        console.log(computerWins, playerWins)
    return [playerWins, computerWins];
}
 playToFive();















