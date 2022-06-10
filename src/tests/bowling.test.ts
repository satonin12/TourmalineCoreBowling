/*
* test cases:
* 1. 0x20 = 0
  2. 1x20 = 20
  3. 10 = 10 (strike)
  3. 10/1/1 = 14 (strike + 2 next frame)
  4. max score (300)
  5. 5/5/1 = 12 (spare bonus)
  5,6,7,8,9,10,11,12,13: 24, 30, 44, 46, 66, 76, 126, 138, 168 - score (with a strike + spare + skittle score)
  14. get a last frame and throws
*
*
* */

import Bowling from "../Bowling/Bowling";

describe("test Class Bowling for working", () => {
  let game: Bowling;

  beforeEach(() => {
    game = new Bowling();
  });

  // test showing result 0, if you do not knock out more than one pin
  it("should return 0 for a zeros in all frame", () => {
    rollMore(20, 0);
    expect(game.getScore()).toEqual(0);
  });

  // tests showing result 20, if in each round (in two throws) one pin is knocked out
  it("should return 20 for a ones in all frame", () => {
    rollMore(20, 1);
    expect(game.getScore()).toEqual(20);
  });

  it("should return 10 when hitting a strike", () => {
    game.roll(10);
    expect(game.getScore()).toEqual<number>(10);
  });

  it("should return 14 when hitting a strike + strike bonus", () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.getScore()).toEqual<number>(14);
  });

  it("should return 300 as the maximum score in the game", () => {
    rollMore(10000, 10);
    expect(game.getScore()).toEqual(300);
  });

  it("handles a spare with correct bonus", () => {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    rollMore(17, 0);
    expect(game.getScore()).toEqual(12);
  });

  // **

  it("should return 24", () => {
    game.roll(10);
    game.roll(7);

    expect(game.getScore()).toEqual(24);
  });

  it("should return 30", () => {
    game.roll(10);
    game.roll(7);
    game.roll(3);

    expect(game.getScore()).toEqual(30);
  });

  it("should return 44", () => {
    game.roll(10);
    game.roll(7);
    game.roll(3);
    game.roll(7);

    expect(game.getScore()).toEqual(44);
  });

  it("should return 46", () => {
    game.roll(10);
    game.roll(7);
    game.roll(3);
    game.roll(7);
    game.roll(2);

    expect(game.getScore()).toEqual(46);
  });

  it("should return 66", () => {
    game.roll(10);

    game.roll(7);

    game.roll(7);
    game.roll(2);

    game.roll(9);

    game.roll(10);

    expect(game.getScore()).toEqual(66);
  });

  it("should return 76", () => {
    game.roll(10);

    game.roll(7);
    game.roll(3);
    game.roll(7);
    game.roll(2);

    game.roll(9);
    game.roll(10);

    expect(game.getScore()).toEqual(76);
  });

  it("should return 126", () => {
    game.roll(10);

    game.roll(7);
    game.roll(3);

    game.roll(7);
    game.roll(2);

    game.roll(9);
    game.roll(10);

    game.roll(10);
    game.roll(10);

    expect(game.getScore()).toEqual(126);
  });

  it("should return 138", () => {
    game.roll(10);

    game.roll(7);
    game.roll(3);

    game.roll(7);
    game.roll(2);

    game.roll(9);
    game.roll(10);

    game.roll(10);
    game.roll(10);

    game.roll(2);
    game.roll(3);

    expect(game.getScore()).toEqual(138);
  });

  it("should return 168", () => {
    game.roll(10);

    game.roll(7);
    game.roll(3);

    game.roll(7);
    game.roll(2);

    game.roll(9);
    game.roll(10);

    game.roll(10);
    game.roll(10);

    game.roll(2);
    game.roll(3);

    game.roll(6);
    game.roll(4);
    game.roll(7);

    expect(game.getScore()).toEqual(162);
  });

  it('should return last frame and throws', () => {
    game.roll(5); // 1
    game.roll(5); // 2

    // get a second frame and throws
    let lastScore = game.getLastScore();
    expect(lastScore).toEqual({
      score: 10,
      rolls: [5, 5]
    })

    game.roll(1); // 3

    // get a third frame and throws
    lastScore = game.getLastScore();
    expect(lastScore).toEqual({
      score: 12,
      rolls: [5, 5, 1]
    })

  })

  const rollMore = (rolls: number, pins: number): void => {
    for (let i = 0; i < rolls; i++) game.roll(pins);
  };
});
