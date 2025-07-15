// replacing prompt input with event listener for each selection
const options = document.querySelectorAll(".options");
let roundCount = 0;
let tieCount = 0;
let playerScore = 0;
let computerScore = 0;
let roundState = "";
let roundText = "";

// reset score handling
const resetGame = function() {
    roundCount = 0;
    tieCount = 0;
    playerScore = 0;
    computerScore = 0;

    document.getElementById("round-count").textContent = "0";
    document.getElementById("p-score").textContent = "0";
    document.getElementById("c-score").textContent = "0";
    document.getElementById("tie-count").textContent = "0";

    options.forEach((option) => {
        option.addEventListener("click", RPS);
    });
};


function RPS() {
    const playerSelection = this.value;

    const compOptions = ["Rock", "Paper", "Scissors"];
    const computerSelection = compOptions[Math.floor(Math.random() * 3)];

    updateMoves(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    updateScore();
    if (checkWinner()) {
        playerScore = computerScore = 0;
        updateScore();
    }
}

// update player's move
function updateMoves(playerSelection, computerSelection) {
    document.getElementById("p-score").src = `./assets/${playerSelection}.png`;
    document.getElementById("c-score").src = `./assets/${computerSelection}.png`;
}

function playRound(playerSelection, computerSelection) {
    const currentMatch = `${playerSelection} vs ${computerSelection}`;

    // check if it's a tie
    if (playerSelection === computerSelection) {
        roundCount++;
        roundState = `${currentMatch}`;
        roundText = 'Draw! Try again.';
        tieCount++;
        return;
    }

    // Rock
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Yay! You Win!`
            playerScore++;
        } else {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Ah! Computer Wins!`;
            computerScore++;
        }
    }

    // Paper
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Hooray! You Win!`;
            playerScore++;
        } else {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Uh oh! Computer Wins!`
            computerScore++;
        }
    }
    // Scissors
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            roundCount++;
            roundState = `${currentMatch} `;
            roundText = `Ha! You Win!`;
            playerScore++;
        } else {
            roundCount++;
            roundState = `${currentMatch}`;
            roundText = `Yikes! Computer Wins!`;
            computerScore++;
        }
    }
}
// update score after each round
function updateScore() {
    document.getElementById("round-count").textContent = `Round: ${roundCount}`;
    document.getElementById("tie-count").textContent = `Tie: ${tieCount}`;
    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computerScore;
    document.getElementById("outcome").textContent = roundState;
    document.getElementById("stage").textContent = roundText;
}

// check who's the winner after 5 rounds
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore == 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        roundCount++;
        roundState = winner;
        roundText = "";
        updateScore();

        options.forEach(option => option.removeEventListener("click", RPS))

        setTimeout(()=> {
            resetGame();
            document.getElementById("outcome").innerHTML = "";


            return true;
        },1000)
    }
    return false;
}
resetGame();
