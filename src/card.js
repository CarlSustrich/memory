export default class Card extends Game {
  constructor(value, position) {
    this.value = value;
    this.position = position;
    this.flipped = false;  
  };

}
