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


const choices = ["rock", "paper", "scissors"];
const outComes = ["won","lost","draw"];

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
    let playerWon = false;
    let result;
    
    if (playerSelection == computerSelection) {
        console.log(`It is a draw! ${playerSelection} and ${computerSelection} have equal power!`);
        result = outComes[2];
        return result;
    }
    else {
        playerWon = (playerSelection == "rock") && (computerSelection == "scissors") ? true :
            (playerSelection == "paper") && (computerSelection == "rock") ? true :
            (playerSelection == "scissors") && (computerSelection == "paper") ? true : false;
    }

    let roundOutCome = playerWon ? `You win! ${playerSelection} beats ${computerSelection}` :
        `You lose! ${playerSelection} beats ${computerSelection}`;

    console.log(roundOutCome);

    result = playerWon ? outComes[0]: outComes[1];
    return result;
        
    
}

function game() {
    let roundTotal = 5;
    let playerWins = 0;
    let playerDefeats = 0;
    let draws = 0;
    
    console.log(`Starting a new game...`)
    
    for (let round = 1; round <= roundTotal; round++ ){
        console.log(`Round ${round} is beginning, prepare your selection!`)
        
        result = playRound(playerPlay(),computerPlay());
        if (result == outComes[0]){
            playerWins++;
        } else if (result == outComes[2]){
            draws++;
        } else {
            playerDefeats++;
        }
    }

    if (playerWins > playerDefeats){
        console.log("You won the game!");
    } else if (playerWins == playerDefeats){
        console.log("The game was a draw!");
    } else {
        console.log("You lost the game, better luck next time!");
    }

    console.log(`SCOREBOARD: | Wins: ${playerWins} | Defeats: ${playerDefeats} | Draws: ${draws} |`);
    
}

let running = true;

while (running){
    game();
}