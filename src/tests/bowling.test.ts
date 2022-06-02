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
});
