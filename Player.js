"use strict";
class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.score = 0;
    this.aces = 0;
    //TODO: figure this out
    this.isBust = false;
  }

  isBust = () => {
    return this.score > 21 ? true : false;
  };
}
