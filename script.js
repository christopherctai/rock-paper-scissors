console.log(game(playRound));


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! No one wins this round"
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    }
}


function game(playRound) {
    let userWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Choose your weapon! This is round ${i + 1} out of 5`);
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
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