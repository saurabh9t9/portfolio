let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetButton = document.querySelector("#reset");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = (userChoice, compChoice) => {
    msg.innerText = `GAME DRAW !. PLAY AGAIN!`;
    msg.style.backgroundColor = "pink";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN 🏆 , ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! , ${compChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log("user choice =", userChoice);
    console.log("comp choice =", compChoice);
 
    resetButton.style.display = "block";

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        const userWin = winConditions[userChoice] === compChoice;
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Scores reset! Start playing!";
    msg.style.backgroundColor = "";
    msg.style.color = "";
    resetButton.style.display = "none";
});