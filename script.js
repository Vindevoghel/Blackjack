const hitBut = document.getElementById("hitme");
const standBut = document.getElementById("stand");
const croupier = document.getElementById("croupier");
const start = document.getElementById("start");
const A = [1, 11];
const J = Q = K = 10;
const cardArray = [A, 2, 3, 4, 5 ,6, 7, 8, 9, 10, J, Q, K];
let p1score, PCscore, rand;

start.addEventListener("click", function(){
    croupier.innerText = "Hit or Stand?";
    rand = Math.floor(Math.random() * cardArray.length);
    deal = cardArray[rand];
    playerHand = deal;
});

function playHand(){
    p1score = 0;
    PCscore;
    croupier.innerText = "Hit or Stand?";
    if (p1score < 21){
        p1score += cardArray[rand];
    }
}