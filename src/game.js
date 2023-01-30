import Card from './card.js';

class Game {
  constructor(){
    this.cards = [];
    this.numberFlipped = 0;
    this.flippedCards = [];
    this.numberCorrect = 0;
  };

  flipCard(index) {
    this.cards[index].flipped = true;
    this.numberFlipped ++;
    this.flippedCards.push(index);
  };

  checkFlipped() {
    if (this.cards[this.flippedCards[0]].value !== this.cards[this.flippedCards[1]]) {
      this.cards[this.flippedCards[0]].flipped = false;
      this.cards[this.flippedCards[1]].flipped = false;
      this.flippedCards.pop();
      this.flippedCards.pop();
      this.numberCorrect += 2;
    } else {
      this.flippedCards.pop();
      this.flippedCards.pop();
    }
  };
}
