import { Game } from './game.js';
import { Card } from './card.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let newGame = new Game();
let card1 = new Card("dog");
let card2 = new Card("fish");
let card3 = new Card("cat");
let card4 = new Card("bird");
let card5 = new Card("cat");
let card6 = new Card("fish");
let card7 = new Card("dolphin");
let card8 = new Card("dog");
let card9 = new Card("bird");
let card10 = new Card("dolphin");
newGame.cards.push(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10);

function updateImage (index) {
  document.getElementById(`${index}`).value = newGame.cards[index].value
  
}

document.addEventListener('click', ({ target }) => {
  if (target.type === 'button' ) {
    newGame.flipCard(target.id);
    updateImage(target.id);
    newGame.checkFlipped();
    console.log(newGame);
    
  }
});
