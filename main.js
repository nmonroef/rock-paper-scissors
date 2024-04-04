
// Getting references to DOM elements
let userPick = document.getElementById("userPick");
let computersPick = document.getElementById("computersPick");
let display = document.getElementById("display");
let ROCK = document.getElementById("ROCK");
let PAPER = document.getElementById("PAPER");
let SCISSORS = document.getElementById("SCISSORS");
let computerScore = document.getElementById("computerScore");
let userScore = document.getElementById("userScore");

// Adding event listeners to the game buttons
ROCK.addEventListener("click", handleClick);
PAPER.addEventListener("click", handleClick);
SCISSORS.addEventListener("click", handleClick);

// Initializing variables to track scores
let userScoreTrack = 1;
let computerScoreTrack = 1;

// Function to handle button clicks
function handleClick(event) {

    const buttonId = event.target.id;
    userPick.innerText = buttonId;
    let bot = randomPick();

     // Compare user's choice with computer's choice
    if (buttonId === bot) {
        display.innerText = "DRAW!!";
        computersPick.innerText = bot
        
    }else if (
        (buttonId === "ROCK" && bot === "SCISSORS") ||
        (buttonId === "PAPER" && bot === "ROCK") ||
        (buttonId == "SCISSORS" && bot === "PAPER") 
    ) {
        display.innerText = "YOU WON!!!"
        computersPick.innerText = bot
        userScore.innerText = userScoreTrack++;
        
        
    }else {
        display.innerText = "YOU LOST!!"
        computersPick.innerText = bot
        computerScore.innerText = computerScoreTrack++
        
    }
}
// Function to randomly pick a choice for the computer
function randomPick() {
    let bot = Math.random()
    if (bot < .33) {
        return "ROCK"
    }else if
        (bot < .66) {
            return "PAPER"
        }else {
            return "SCISSORS"
        }
    };

        
        

