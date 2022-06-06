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
});
