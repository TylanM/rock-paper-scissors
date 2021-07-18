//Witten by github.com/TylanM as a part of "The Odin Project" curriculum

const choices = ["rock", "paper", "scissors"];
const outComes = ["won","lost","draw"];

function computerPlay() {
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    addToLog(`CPU chose ${randomChoice}`, "yellow");
    return randomChoice;
}

function playerPlayUi(weapon) {
    selection = weapon.target.id;

    if(selection == "rock") {
        addToLog("Player selected rock!")
    } else if (selection == "paper") {
        addToLog("Player selected paper!")
    } else if (selection == "scissors") {
        addToLog("Player selected scissors!");
    }

    if (log.childNodes.length > 5) {
        log.removeChild(log.lastChild)
    }

    

    let result = playRound(selection,computerPlay());
    updateScore(result);
    if (rounds == 0) {
    addToLog(`Round 5 Summary`, "black" );
    } else {
        addToLog(`Round ${rounds} Summary`, "black" )
    }
}

function playRound(playerSelection, computerSelection) {
    let playerWon = false;
    let result;

    //alert("RUNNING");

    if (playerSelection == computerSelection) {
        addToLog(`It is a draw! ${playerSelection} and ${computerSelection} have equal power!`);
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

    addToLog(roundOutCome,"orange");

    result = playerWon ? outComes[0]: outComes[1];
    return result;
        
    
}

function updateScore(result) {

    if (result == outComes[0]){
        playerWins++;
    } else if (result == outComes[2]){
        draws++;
    } else {
        playerDefeats++;
    }

    rounds++;
    scoreboard.textContent = `| Wins: ${playerWins} | Defeats: ${playerDefeats} | Draws: ${draws} |`;

    if(playerWins + playerDefeats + draws == roundTotal) {
        if (playerWins > playerDefeats){
            addToLog("You won the game!");
        } else if (playerWins == playerDefeats) {
            addToLog("The game was a draw!");
        } else {
            addToLog("You lost the game, better luck next time!", "red")
        }
    
        scoreboard.textContent = `SCOREBOARD: | Wins: ${playerWins} | Defeats: ${playerDefeats} | Draws: ${draws} |`;
        startNewGame();
    } 
}

function addToLog(text,color){
    defaultColor = "green"
    color = (typeof color === 'undefined') ? defaultColor : color;
    const contentp = document.createElement('p');
    //contentp.classList.add('content');
    contentp.textContent = text;
    contentp.style.color = color;
    log.prepend(contentp);
}

function startNewGame() {
    addToLog(`Starting a new game...`, "orange")
    scoreboard.textContent = `| Wins: ${playerWins} | Defeats: ${playerDefeats} | Draws: ${draws} |`;
    playerWins = 0;
    playerDefeats = 0;
    draws = 0;
    rounds = 0;
}

console.log("Welcome to the console, let us play some rock-paper-scissors!");

const buttons = document.querySelectorAll('button');
const log = document.querySelector('#log')
const scoreboard = document.querySelector('#scoreboard')


buttons.forEach(button => button.addEventListener('click',playerPlayUi));


const roundTotal = 5;
let playerWins = 0;
let playerDefeats = 0;
let draws = 0;
let rounds = 0;

startNewGame();

