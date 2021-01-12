class Blackjack {
  constructor(name) {
    this.humanPlayer = new Player(name);
    this.dealer = new Player("Dealer");
    this.deck = new Deck().shuffle();
    //this.start = this.startGame();
  }

  /*startGame = () => {
    this.drawCard(this.player);
  };*/

  //TODO: move to Deck Class?
  drawCardFromDeck = (n) => {
    let drawnCards = this.deck.slice(-n);
    this.deck = this.deck.slice(0, -n);
    return drawnCards[n - 1];
  }

  //TODO: move to Player Class?
  drawCard = (player) => {
    let card = this.drawCardFromDeck(1);
    
    if (card.rank === "Ace") {
      player.aces += 1;
    }
    
    player.score += card.value;
    player.cards.push(card);
    
    return card;
  };

  setScore = (player) => {
    if (player.score > 21 && player.aces > 0) {
      player.score -= 10;
      player.aces -= 1;
    }

    if (player.score > 21) {
      return player.name + "'s Score is " + player.score + ". Bust!";
    } 
    else if (player.score === 21) {
      return player.name +
        "' Score is " +
        player.score +
        ". BLACKJACK! " +
        player.name +
        " wins!";
    } 
    else {
      return player.name + "'s Score is " + player.score + ". Good to go";
    }
  };
}


//Why is this needed?
let blackjack = new Blackjack("jef");
//console.dir(blackjack.player)
//console.dir(blackjack.dealer)
//console.dir(blackjack.deck)
//console.dir(blackjack.startGame())
