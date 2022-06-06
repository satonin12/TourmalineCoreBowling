import { IBowling } from "../types/types";
import { checkNumber } from "../services/services";

class Bowling implements IBowling {
  // values
  frames: Array<number> = [];

  // methods
  roll = (pins : number) => this.frames.push(pins);

  get score() {
    let score : number = 0;

    for(let frameI = 0; frameI < 10; frameI++) {
      if(this.isStrike(this.frames[frameI])) {
        score += this.strikeBonus(frameI);
        continue;
      }

      // TODO: fill the array with zeros so as not to check for undefined
      score += checkNumber(this.frames[frameI]);
    }
    return score;
  };

  // bonus methods
  strikeBonus = (rollIndex : number) => {
    return checkNumber(this.frames[rollIndex + 1]) + checkNumber(this.frames[rollIndex + 2]) + 10;
  };

  // boolean methods
  isStrike = (frameScore : number) => frameScore === 10;

  //log methods
  logToConsole = (msg : string) => console.log(msg || 'logToConsole');
}

export default Bowling;
