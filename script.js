const startBut = document.getElementById("start");
const hitBut = document.getElementById("hitme");
const standBut = document.getElementById("stand");
const resetBut = document.getElementById("reset");
const humanDiv = document.getElementById("humansection");
const dealerDiv = document.getElementById("dealersection");
const scoreDiv = document.getElementById("scoressection");
let img = document.createElement("img");

humanDiv.innerHTML = "";
dealerDiv.innerHTML = "";
hitBut.style.display = "none";
standBut.style.display = "none";
resetBut.style.display = "none";

const askForName = () => {
  return window.prompt("What is your name?");
};

//window.onload = playGame;

startBut.addEventListener("click", function () {
  playGame();
});

function playGame() {
  let blackjack = new Blackjack(askForName());
  console.dir(blackjack);

  startBut.style.display = "none";
  hitBut.style.display = "inline-block";
  standBut.style.display = "inline-block";
  resetBut.style.display = "inline-block";

  hitBut.addEventListener("click", function () {
    playHand(blackjack.humanPlayer);
  });

  standBut.addEventListener("click", function () {
    playDealerHand = () => setTimeout(playHand(blackjack.dealer), 2000);
    playDealerHand();
  });

  reset.addEventListener("click", function () {
    restart();
    blackjack = new Blackjack(askForName());
  });
}

function restart() {
  humanDiv.innerHTML = "";
  dealerDiv.innerHTML = "";
  scoreDiv.innerText = "";
  hitBut.style.display = "inline";
  standBut.style.display = "inline";
}

function playHand(player) {
  let card = blackjack.drawCard(player);

  img.src = card.image;
  
  if (player.name !== "Dealer") {
    humanDiv.appendChild(img.cloneNode(true));
  }
  
  if (player.name === "Dealer") {
    dealerDiv.appendChild(img.cloneNode(true));
    
    if (player.score < 18) {
      playDealerHand();
    }
  }
  scoreDiv.innerText = blackjack.setScore(player);
}
