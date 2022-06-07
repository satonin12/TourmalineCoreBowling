import { IBowling } from "../types/types";
import { checkNumber } from "../services/services";

class Bowling implements IBowling {
  // values
  frames: Array<number> = [];

  // methods
  roll = (pins : number) => this.frames.push(pins);

  get score() {
    let score : number = 0;
    let rollIndex : number = 0;

    for(let frameI = 0; frameI < 10; frameI++) {
      if(this.isStrike(rollIndex)) {
        score += this.strikeBonus(rollIndex);
        rollIndex++;
        continue;
      }

      let frameScore = this.sumFrame(rollIndex);

      if(this.isSpare(frameScore)) {
        if(this.iStrikeAfterSpare(frameScore, rollIndex)) {
          // TODO: repetition of the code - the same situation with the strike
          score += this.spareWithStrikeBonus(rollIndex)
          rollIndex ++;
          continue;
        }else {
          score += this.spareBonus(rollIndex)
        }
      } else {
        // TODO: fill the array with zeros so as not to check for undefined
        score += frameScore;
      }
      rollIndex += 2;
    }

    return score;
  };

  get lastScore() {
    const score = this.score;
    const rolls = this.frames;
    return {
      score,
      rolls,
    };
  }

  sumFrame = (rollIndex : number) => checkNumber(this.frames[rollIndex]) + checkNumber(this.frames[rollIndex + 1]);

  // bonus methods
  strikeBonus = (rollIndex : number) => checkNumber(this.frames[rollIndex + 1]) + checkNumber(this.frames[rollIndex + 2]) + 10;
  spareBonus = (rollIndex : number) => checkNumber(this.frames[rollIndex + 2]) + 10;
  spareWithStrikeBonus = (rollIndex : number)  => checkNumber(this.frames[rollIndex + 1]) + 10;

  // boolean methods
  isStrike = (rollIndex : number) => this.frames[rollIndex] === 10;
  isSpare = (frameScore : number) => frameScore >= 10;
  iStrikeAfterSpare = (frameScore : number, rollIndex: number) => this.isStrike(rollIndex + 1);

  //log methods
  logToConsole = (msg : string) => console.log(msg || 'logToConsole');
}

export default Bowling;
