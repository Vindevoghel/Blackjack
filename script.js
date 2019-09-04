const hitBut = document.getElementById("hitme");
const standBut = document.getElementById("stand");
const playerCroupier = document.getElementById("playerCroupier");
const computerCroupier = document.getElementById("computerCroupier");
const reset = document.getElementById("reset");
const p1CardsDiv = document.getElementById("p1CardsDiv");
const pcCardsDiv = document.getElementById("pcCardsDiv");
const finalmessage = document.getElementById("endgametext");
let img = document.createElement("img");
const A = 11;
const J = Q = K = 10;
const cardArray = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];
let p1Score, pcScore, rand, p1Aces, pcAces, textp1Aces, textpcAces, p1Cards, pcCards;

let cardGallery = [
    "img/Ace.png",
    "img/Two.png",
    "img/Three.png",
    "img/Four.png",
    "img/Five.png",
    "img/Six.png",
    "img/Seven.png",
    "img/Eight.png",
    "img/Nine.png",
    "img/Ten.png",
    "img/Jack.png",
    "img/Queen.png",
    "img/King.png"
];

/*let test =document.getElementById("cardTest");
let i= 0;
test.addEventListener("click", function(){
    test.setAttribute("src", cardGallery[i]);
    i++;
});



/*playerCroupier.innerText = "Click reset to play a round.";


reset.addEventListener("click", function(){
    p1Score = 0;
    //PCscore = 0;
    if (reset.innerText === "Reset") {
        reset.innerText = "reset";
    } else {
        p1Score=0;
        playGame();
        reset.innerText = "Reset";
    }
});*/

window.onload = function playGame() {
    restart();

    hitBut.addEventListener("click", function () {
        playHand();
    });
    standBut.addEventListener("click", function () {
        pcHand();
    });

    reset.addEventListener("click", function () {
        restart();
    });
};

function restart() {
    p1Score = pcScore = p1Aces = pcAces = textp1Aces = textpcAces = 0;
    p1Cards = [];
    pcCards = [];
    playerCroupier.innerText = "Hit or Stand?";
    computerCroupier.innerText = "Computer is waiting for turn.";
    p1CardsDiv.innerHTML = "";
    pcCardsDiv.innerHTML = "";
    hitBut.style.display = "inline";
    standBut.style.display = "inline";
}

function playHand() {
    rand = Math.floor(Math.random() * cardArray.length);

    console.log("First draw. Hand is " + p1Score + ". Card is " + rand);

    if (rand === 0) {
        p1Aces += 1;
        textp1Aces += 1;
    }
    p1Score += cardArray[rand];
    //p1Cards.push(cardGallery[rand]);
    img.src = cardGallery[rand];
    p1CardsDiv.appendChild(img.cloneNode(true));


    //p1CardsDiv.innerText = "Player cards are: " + p1Cards;


    if (p1Score > 21 && p1Aces >= 1) {
        console.log(p1Aces * 10);
        p1Score -= p1Aces * 10;
        p1Aces = 0;
    }

    if (p1Score > 21) {
        playerCroupier.innerText = "You have " + p1Score + ". Bust! Play again? Click Reset.";
        hitBut.style.display = "none";
        standBut.style.display = "none";
    } else if (p1Score === 21) {
        playerCroupier.innerText = "Blackjack! You win! Play again? Click Reset.";
        hitBut.style.display = "none";
        standBut.style.display = "none";
    } else {
        playerCroupier.innerText = "You have " + p1Score + ". You have " + textp1Aces + " Aces. Hit or Stand?";
    }
}

function pcHand() {
    hitBut.style.display = "none";
    standBut.style.display = "none";
    while (pcScore < 17 || pcScore <= p1Score) {
        rand = Math.floor(Math.random() * cardArray.length);

        if (rand === 0) {
            pcAces += 1;
            textpcAces += 1;
        }

        pcScore += cardArray[rand];
        img.src = cardGallery[rand];
        pcCardsDiv.appendChild(img.cloneNode(true));

        if (pcScore > 21 && pcAces >= 1) {
            console.log(pcAces * 10);
            pcScore -= pcAces * 10;
            pcAces = 0;
        }

        computerCroupier.innerText = "Computer Hand is " + pcScore + ". Computer Aces is " + textpcAces;

        if (pcScore <= 21 && pcScore > p1Score) {
            playerCroupier.innerText = pcScore + " beats " + p1Score + ". You lose!"
        } else {
            playerCroupier.innerText = p1Score + " beats " + pcScore + ". You win!"
        }

    }
}

/*function compareHands() {
    if(p1Score ){

    }
}
*/