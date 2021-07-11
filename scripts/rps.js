console.log("Welcome to the console, let us play some rock-paper-scissors!");

//Initial algorithm

//Init round count variable and start new round
//Ask player if they choose rock, paper or scissors
//Store user input in variable
//Allow the computer to randomly pick one of the choices and store result
//compare user vs cpu choice and determine outcome

//Rock beats scissors
//Paper beats rock
//Scissors beat paper


//Declare outcome and print scoreboard
//Begin another around

//repeat... 

let roundCount = 0;
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

function playerPlay() {
    playerSelecting = true;
    let result;

    while (playerSelecting) {
        let input = prompt(`Select your weapon! Do you choose ${"rock"}, ${"paper"} or ${"scissors"}?`);
        input = input.toLowerCase();
        playerSelecting = choices.includes(input) ? false : true; 
        
        if (playerSelecting){ 
            console.log(`Your selection must have been typed incorrectly. Please try again.`);
        }        
        result = input;
    }

    return result;
 
}

function playRound(playerSelection, computerSelection) {
    roundCount++;
    console.log(`Round ${roundCount} is beginning, prepare your selection!`)
    playerPlay();
    
    if (playerSelection == computerSelection) {
        return `It is a draw! ${playerSelection} and ${computerSelection} have equal power!`;
    }
    
}

let running = true;

while (running){
    playRound(playerPlay,computerPlay);
}