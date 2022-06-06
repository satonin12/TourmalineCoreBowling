import Bowling from '../Bowling/Bowling';

describe('test Class Bowling for working', () => {
  let game : Bowling;

  beforeEach(() => {
    game = new Bowling();
  });

  // * test for working Class Bowling, also method logToConsole
  it('working class & method log', () => {
    const testMsg : string = 'test msg for working';

    console.log = jest.fn()
    game.logToConsole(testMsg);

    expect(console.log).toHaveBeenCalledWith(testMsg);
  });

  // test showing result 0, if you do not knock out more than one pin
  it('should return 0 for a zeros in all frame', () => {
    rollMore(20, 0);
    expect(game.score).toEqual(0);
  })

  // tests showing result 20, if in each round (in two throws) one pin is knocked out
  it('should return 20 for a ones in all frame', () => {
    rollMore(20, 1);
    expect(game.score).toEqual(20);
  })

  it('should return 10 when hitting a strike', () => {
    game.roll(10);
    expect(game.score).toEqual<number>(10);
  })

  it('should return 14 when hitting a strike + strike bonus', () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.score).toEqual<number>(14);
  })

  const rollMore = (rolls : number, pins : number) : void => {
    for(let i = 0; i< rolls; i++) game.roll(pins);
  }
});
