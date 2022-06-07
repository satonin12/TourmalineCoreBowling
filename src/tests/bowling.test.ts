import Bowling from "../Bowling/Bowling";

describe("test Class Bowling for working", () => {
  let game: Bowling;

  beforeEach(() => {
    game = new Bowling();
  });

  // * test for working Class Bowling, also method logToConsole
  it("working class & method log", () => {
    const testMsg: string = "test msg for working";

    console.log = jest.fn();
    game.logToConsole(testMsg);

    expect(console.log).toHaveBeenCalledWith(testMsg);
  });

  // test showing result 0, if you do not knock out more than one pin
  it("should return 0 for a zeros in all frame", () => {
    rollMore(20, 0);
    expect(game.score).toEqual(0);
  });

  // tests showing result 20, if in each round (in two throws) one pin is knocked out
  it("should return 20 for a ones in all frame", () => {
    rollMore(20, 1);
    expect(game.score).toEqual(20);
  });

  it("should return 10 when hitting a strike", () => {
    game.roll(10);
    expect(game.score).toEqual<number>(10);
  });

  it("should return 14 when hitting a strike + strike bonus", () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.score).toEqual<number>(14);
  });

  it("should return 300 as the maximum score in the game", () => {
    rollMore(10000, 10);
    expect(game.score).toEqual(300);
  });

  it("handles a spare with correct bonus", () => {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    rollMore(17, 0);
    expect(game.score).toEqual(12);
  });

  // **

  it("should return 24 for calculateScore(X|7) and second frame for showFrame(1)", () => {
    game.roll(10);
    game.roll(7);

    expect(game.score).toEqual(24);
  });

  it("should return 30", () => {
    game.roll(10);
    game.roll(7);
    game.roll(3);

    expect(game.score).toEqual(30);
  });

  it("should return 44", () => {
    game.roll(10);
    game.roll(7);
    game.roll(3);
    game.roll(7);

    expect(game.score).toEqual(44);
  });

  it("should return 46", () => {
    game.roll(10);
    game.roll(7);
    game.roll(3);
    game.roll(7);
    game.roll(2);

    expect(game.score).toEqual(46);
  });

  it("should return 66", () => {
    game.roll(10);

    game.roll(7);

    game.roll(7);
    game.roll(2);

    game.roll(9);

    game.roll(10);

    expect(game.score).toEqual(66);
  });

  it("should return 76", () => {
    game.roll(10);

    game.roll(7);
    game.roll(3);
    game.roll(7);
    game.roll(2);

    game.roll(9);
    game.roll(10);

    expect(game.score).toEqual(76);
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

    expect(game.score).toEqual(126);
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

    // game.roll(6);
    // game.roll(7);

    expect(game.score).toEqual(138);
  });

  const rollMore = (rolls: number, pins: number): void => {
    for (let i = 0; i < rolls; i++) game.roll(pins);
  };
});
