//Creates Card Object which holds all the necessary information for game logic and display purposes
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        this.name = rank + " of " + suit;
        this.image = "assets/img/" + suit + rank + ".png";
    }
}