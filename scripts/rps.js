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
    let playerWon = false
    
    if (playerSelection == computerSelection) {
        return console.log(`It is a draw! ${playerSelection} and ${computerSelection} have equal power!`);
    }
    else {
        playerWon = (playerSelection == "rock") && (computerSelection == "scissors") ? true :
            (playerSelection == "paper") && (computerSelection == "rock") ? true :
            (playerSelection == "scissors") && (computerSelection == "paper") ? true : false;
    }

    let roundOutCome = playerWon ? `You win! ${playerSelection} beats ${computerSelection}` :
        `You lose! ${playerSelection} beats ${computerSelection}`;

    console.log(roundOutCome);
        
    
}

let running = true;

while (running){
    roundCount++;
    console.log(`Round ${roundCount} is beginning, prepare your selection!`)
    playRound(playerPlay(),computerPlay());
}