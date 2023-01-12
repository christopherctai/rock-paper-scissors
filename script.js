const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice());
    });
});

const result = document.querySelector('.result');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

let ultimateResult = document.querySelector('.ultimate-result');
let playAgain = document.querySelector('.play-again');

playAgain.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playAgain.textContent = '';
    playAgain.textContent= '';
    playAgain.classList.toggle('hidden')
    ultimateResult.textContent = '';
    result.textContent = '';
}


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = "Tie! No one wins this round";
        return console.log("Tie! No one wins this round");
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        computerScore.textContent++;
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
        if (computerScore.textContent == 5) {
            ultimateResult.textContent = "The computer beat you and is coming for your job!";
            playAgain.classList.toggle('hidden');
            playAgain.textContent = "Play Again?";
        }
        // return console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else {
        playerScore.textContent++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        if (playerScore.textContent == 5) {
            ultimateResult.textContent = "You beat the computer and saved the world!";
            playAgain.classList.toggle('hidden');
            playAgain.textContent = "Play Again?";
        }
        // return console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    }
}


/*function game(playRound) {
    let userWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let choices = ["Rock", "Paper", "Scissors"];
        if (!choices.includes(playerSelection)) {
            computerWinCount++;
            console.log("That is an invalid choice. Computer gets a point by default.");
        } else {
            let result = playRound(playerSelection, computerSelection);
            if (result === `You lose! ${computerSelection} beats ${playerSelection}!`) {
                computerWinCount++;
            } else if (result === `You win! ${playerSelection} beats ${computerSelection}!`) {
                userWinCount++;
            }
            console.log(result);
        }
    }
    if (userWinCount > computerWinCount) {
        return `Game over! You won against the computer, User: ${userWinCount} points, Computer: ${computerWinCount} points!`;
    } else if (userWinCount < computerWinCount) {
        return `Game over! You lost against the computer, User: ${userWinCount} points, Computer: ${computerWinCount} points!`;
    } else {
        return `Game over! It was a tie, User: ${userWinCount} points, Computer: ${computerWinCount} points!`;
    }
}
*/


/*
Pseudocode
function with no input 
	define array of choices 
	randomly choose something from the array of Rock, Paper, or Scissors
	return Rock, Paper, or Scissors 

function playRound that takes playerSelection and computerSelection as parameters 
	compare player to computer selection	
	if playerSelection === computerSelection 
		return tie 
	if playerSelection loses
		return You lose 
	if playerSelection wins 
		return you win
	
function that takes playRound function to play a 5 round game 
    get user input 
    verify the user input 
	for 5 times 
		playRound()
    keep track of the score, defining variables for computer victory and user victory

*/