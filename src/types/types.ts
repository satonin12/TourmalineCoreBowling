export interface IBowling {
  frames: Array<number>;
  roll: (pins: number) => void;
  getScore: () => number;
  getLastScore: () => object;
  sumFrame: (rollIndex: number) => number;
  strikeBonus: (rollIndex : number) => number;
  spareWithStrikeBonus: (rollIndex : number) => number;
  isStrike: (rollIndex : number) => boolean;
  isSpare: (frameScore : number) => boolean;
  iStrikeAfterSpare: (frameScore : number, rollIndex : number) => boolean;
}
