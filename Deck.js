'use-strict';
//@ts-check
class Deck {
    constructor() {
        this.cards = this.createDeck();
    }

    createDeck = () => {
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
        const ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
        let deck = [];

        //Loop through all 13 cards within each suit assigning suit, rank and value
        suits.forEach(suit => {
            ranks.forEach((rank, index) => {
                //Value of card is always one off from the index in the ranks array
                let value = index + 1;
                
                //Actual Blackjack Class will check when player score goes over 21 and switches value of Ace to 1 if that is the case.
                if (rank === "Ace") {
                    value = 11;
                }
                
                //Face cards' values are always 10
                if (["Jack", "Queen", "King"].includes(rank)) {
                    value = 10;
                }

                //Card class has constructor that generates name and image location based on suit, rank and value parameters 
                let card = new Card(suit, rank, value);
                deck.push(card);
            })

        })
        return deck;
    }

    //Haven't decided if Deck should be shuffled in Deck Class or in Blackjack Class. For now this can stay.
    shuffle() {
        let currentIndex = this.cards.length;
        let randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];


        }
        return this.cards;
    }
}