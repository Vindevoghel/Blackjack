const startBut = document.getElementById("start");
const hitBut = document.getElementById("hitme");
const standBut = document.getElementById("stand");
const playerCroupier = document.getElementById("playerCroupier");
const computerCroupier = document.getElementById("computerCroupier");
const reset = document.getElementById("reset");
const p1CardsDiv = document.getElementById("p1CardsDiv");
const pcCardsDiv = document.getElementById("pcCardsDiv");
let img = document.createElement("img");

playerCroupier.innerText = "Hit or Stand?";
computerCroupier.innerText = "Computer is waiting for turn.";
p1CardsDiv.innerHTML = "";
pcCardsDiv.innerHTML = "";
hitBut.style.display = "inline";
standBut.style.display = "inline";

const askForName = () => {
  return window.prompt("What is your name?");
};

window.onload = playGame;

function playGame() {
    let blackjack = new Blackjack(askForName());
    console.dir(blackjack);
  
    hitBut.addEventListener("click", function () {
      playHand(blackjack.humanPlayer);
    });
    
    standBut.addEventListener("click", function () {
      pcHand();
    });
  
    reset.addEventListener("click", function () {
      blackjack = new Blackjack(askForName());
      restart();
    });
  };

function restart() {
  p1Cards = [];
  pcCards = [];
  playerCroupier.innerText = "Hit or Stand?";
  computerCroupier.innerText = "Computer is waiting for turn.";
  p1CardsDiv.innerHTML = "";
  pcCardsDiv.innerHTML = "";
  hitBut.style.display = "inline";
  standBut.style.display = "inline";
}

function playHand(player) {
  let card = blackjack.drawCard(player);
  img.src = card.image;
  p1CardsDiv.appendChild(img.cloneNode(true));

  playerCroupier.innerText = blackjack.setScore(player);
}
