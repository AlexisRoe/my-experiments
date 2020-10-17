const paperButton = document.getElementById('paper');
const rockButton = document.getElementById('rock');
const scissorButton = document.getElementById('scissor');
const paperComputerButton = document.getElementById('paper_computer');
const rockComputerButton = document.getElementById('rock_computer');
const scissorComputerButton = document.getElementById('scissor_computer');
const infoBox = document.getElementById('infoBox');
const resultText = document.getElementById('results');
const resultPlayerBadge = document.getElementById('result_player');
const resultComputerBadge = document.getElementById('result_computer');

let playerScore = 0;
let computerScore = 0;

function computerChooseARandomItem() {
    var possibleItems = ['Rock', 'Paper', 'Scissor'];
    var computerChoice = possibleItems[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function whoIsWinning (playerChoosenItem, computerChoosenItem) {
    switch (playerChoosenItem+computerChoosenItem) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            playerScore++;
            resultPlayerBadge.innerHTML = playerScore;
            resultText.innerHTML = playerChoosenItem + " beats " + computerChoosenItem + ". Player 1 won!";
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            computerScore++;
            resultComputerBadge.innerHTML = computerScore;
            resultText.innerHTML = computerChoosenItem + " beats " + playerChoosenItem + ". Computer won!";
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            resultText.innerHTML = "Draw. Noone wins!";
            break;
    }
}

function makingOtherButtonsGray (playerChoice, computerChoice) {
    switch (computerChoice) {
        case "Rock":
            choiceHiglightingItem (paperComputerButton, scissorComputerButton);
            break;
        case "Paper":
            choiceHiglightingItem (rockComputerButton, scissorComputerButton);
            break;
        case "Scissor":
            choiceHiglightingItem (paperComputerButton, rockComputerButton);
            break;
    }
    
    switch (playerChoice) {
        case "Rock":
            choiceHiglightingItem (paperButton, scissorButton);
            break;
        case "Paper":
            choiceHiglightingItem (rockButton, scissorButton);
            break;
        case "Scissor":
            choiceHiglightingItem (paperButton, rockButton);
            break;
    }
}

function choiceHiglightingItem (grayItem1, grayItem2) {
    grayItem1.style.filter = "grayscale(100%)";
    grayItem2.style.filter = "grayscale(100%)";
}

function reset() {
    infoBox.style.animation = "";

    paperButton.style.filter = "grayscale(0%)";
    rockButton.style.filter = "grayscale(0%)";
    scissorButton.style.filter = "grayscale(0%)";

    paperComputerButton.style.filter = "grayscale(0%)";
    rockComputerButton.style.filter = "grayscale(0%)";
    scissorComputerButton.style.filter = "grayscale(0%)";
}

function main () {
    paperButton.addEventListener("click", function () {
        var computerChoosenItem = computerChooseARandomItem ();
        makingOtherButtonsGray ('Paper', computerChoosenItem);
        whoIsWinning ('Paper', computerChoosenItem);
        infoBox.style.animation = "infoBadgeMove 4s";
        window.setTimeout (reset, 4005);
    })

    rockButton.addEventListener("click", function () {
        var computerChoosenItem = computerChooseARandomItem ();
        makingOtherButtonsGray ('Rock', computerChoosenItem);
        whoIsWinning ('Rock', computerChoosenItem);
        infoBox.style.animation = "infoBadgeMove 4s";
        window.setTimeout (reset, 4005);
    })

    scissorButton.addEventListener("click", function () {
        var computerChoosenItem = computerChooseARandomItem ();
        makingOtherButtonsGray ('Scissor', computerChoosenItem);
        whoIsWinning ('Scissor', computerChoosenItem);
        infoBox.style.animation = "infoBadgeMove 4s";
        window.setTimeout (reset, 4005);
    })
}

window.onload = main ();
