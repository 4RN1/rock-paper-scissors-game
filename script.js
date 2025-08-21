const startingScreen = document.querySelector(".hero");
const gameScreen = document.querySelector(".playScreen");
const playBtn = document.querySelector(".button-with-icon");
const playAgain = document.querySelector(".button-with-icon2");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerScore = 0;
let cpuScore = 0;

const playerpickedIcon = document.querySelector('.player-pick')
const cpuPickedIcon = document.querySelector('.cpu-pick')

const playerIconImg = document.createElement("img");
const computerIconImg = document.createElement("img");

playBtn.addEventListener("click", () => {
  startingScreen.style.display = "none";
  gameScreen.style.display = "block";
});

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

function computermove() {
  const rand = Math.floor(Math.random() * 9) + 1;
  if (rand <= 3) return "rock";
  if (rand <= 6) return "paper";
  return "scissors";
}

function playGame(playerPick) {
  const computerPick = computermove();

  let winnerText = document.querySelector(".win-text");
  winnerText.className = "win-text";
  let whoWon = document.querySelector(".winnerIs");

  
  playerpickedIcon.innerHTML = "";
  cpuPickedIcon.innerHTML = "";


  const playerIconImg = document.createElement("img");
  const computerIconImg = document.createElement("img");
  playerIconImg.src = `./images/${playerPick}.png`;
  computerIconImg.src = `./images/${computerPick}.png`;


  playerpickedIcon.appendChild(playerIconImg);
  cpuPickedIcon.appendChild(computerIconImg);

  if (playerPick === computerPick) {
    whoWon.style.color = "white";
    winnerText.textContent = `IT'S`;
    whoWon.textContent = "TIE";
  } else if (
    (playerPick === "rock" && computerPick === "scissors") ||
    (playerPick === "paper" && computerPick === "rock") ||
    (playerPick === "scissors" && computerPick === "paper")
  ) {
    playerScore++;
    winnerText.style.color = "#26FF55";
    winnerText.textContent = "WINNER";
    whoWon.textContent = "PLAYER";
  } else {
    cpuScore++;
    winnerText.style.color = "#26FF55";
    winnerText.textContent = "WINNER";
    whoWon.textContent = "COMPUTER";
  }

  let playerPoint = document.querySelector(".player-score");
  playerPoint.textContent = playerScore;
  let cpuPoint = document.querySelector(".cpu-score");
  cpuPoint.textContent = cpuScore;
}

