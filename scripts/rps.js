//Witten by github.com/TylanM as a part of "The Odin Project" curriculum

console.log("Welcome to the console, let us play some rock-paper-scissors!");

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

function gameUi() {
    for (let i = 0; i < 5; i++) {
        console.log("HEllo WORLD!");
    }
    running = false;
}

function updateScoreUi() {
    console.log("PLACEHOLDER SCORE!")
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if(button.id == "rock") {
        alert("I found a rock!");
    } else if (button.id == "paper") {
        alert("I found a piece of paper!");
    } else if (button.id == "scissors") {
        alert("I found a pair of scissors!");
    }
    
  });
});



let running = true;

while (running){
    gameUi();
}