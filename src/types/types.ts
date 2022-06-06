export interface IBowling {
  frames: Array<number>;
  roll: (pins: number) => void;
  strikeBonus: (rollIndex : number) => number;
  isStrike: (frameScore : number) => boolean;
  logToConsole: (msg : string) => void;
}
