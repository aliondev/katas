import { Score } from '../../src/tennis-scoring/Score';
import { Game, PlayerNumber } from '../../src/tennis-scoring/Game';

describe('Tennis Scoring kata', () => {
  it('allows players to score', () => {
    const game = new Game();
    const playerNumber = aPlayerNumber();

    expect(game.scoreOfPlayer(playerNumber).equals(Score.of0())).toBe(true);

    game.winPointForPlayer(playerNumber);
    expect(game.scoreOfPlayer(playerNumber).equals(Score.of15())).toBe(true);

    game.winPointForPlayer(playerNumber);
    expect(game.scoreOfPlayer(playerNumber).equals(Score.of30())).toBe(true);

    game.winPointForPlayer(playerNumber);
    expect(game.scoreOfPlayer(playerNumber).equals(Score.of40())).toBe(true);

    game.winPointForPlayer(playerNumber);
    expect(game.scoreOfPlayer(playerNumber).equals(Score.ofGame())).toBe(true);
  });

  it('does not have a winner and is not completed when it starts', () => {
    const game = new Game();

    expect(game.completed()).toBe(false);
    expect(game.winner()).toBe(undefined);
  });

  it('does not have a winner and is not completed if a player has not reached the max score', () => {
    const game = new Game();
    const playerNumber = aPlayerNumber();

    game.winPointForPlayer(playerNumber);
    game.winPointForPlayer(playerNumber);
    game.winPointForPlayer(playerNumber);

    expect(game.completed()).toBe(false);
    expect(game.winner()).toBe(undefined);
  });

  it('makes the game able to be completed with a winner', () => {
    const game = new Game();
    const playerNumber = aPlayerNumber();

    game.winPointForPlayer(playerNumber);
    game.winPointForPlayer(playerNumber);
    game.winPointForPlayer(playerNumber);
    game.winPointForPlayer(playerNumber);

    expect(game.completed()).toBe(true);
    expect(game.winner()).toBe(playerNumber);
  });

  it('handles the deuce case', () => {
    const game = aGameWithDeuce();
    const deuceScore = Score.ofDeuce();

    expect(game.scoreOfPlayer(1).equals(deuceScore)).toBe(true);
    expect(game.scoreOfPlayer(2).equals(deuceScore)).toBe(true);
  });

  it('handles when game is at deuce and one of them scores', () => {
    const game = aGameWithDeuce();

    game.winPointForPlayer(1);

    expect(game.scoreOfPlayer(1).equals(Score.ofAdvantage())).toBe(true);
    expect(game.scoreOfPlayer(2).equals(Score.of40())).toBe(true);
  });

  it('handles when a player with advantage win a point', () => {
    const playerNumber = aPlayerNumber();
    const game = aGameWithPlayerHavingAdvantage(playerNumber);

    game.winPointForPlayer(playerNumber);

    expect(game.completed()).toBe(true);
    expect(game.winner()).toBe(playerNumber);
  });

  it('handles when a player has advantage and the opponent win a point', () => {
    const playerWithAdvantage = aPlayerNumber();
    const playerWithoutAdvantage = playerWithAdvantage === 1 ? 2 : 1;
    const game = aGameWithPlayerHavingAdvantage(playerWithAdvantage);

    game.winPointForPlayer(playerWithoutAdvantage);

    const deuceScore = Score.ofDeuce();
    expect(game.completed()).toBe(false);
    expect(game.winner()).toBe(undefined);
    expect(game.scoreOfPlayer(1).equals(deuceScore)).toBe(true);
    expect(game.scoreOfPlayer(2).equals(deuceScore)).toBe(true);
  });

  it('handles when a game is completed and we try to win a point for a player', () => {
    const game = aCompletedGame();

    expect(() => game.winPointForPlayer(aPlayerNumber())).toThrowError(
      'Trying to win points when game is completed',
    );
  });
});

function aGameWithDeuce() {
  const game = new Game();

  game.winPointForPlayer(1);
  game.winPointForPlayer(1);
  game.winPointForPlayer(1);

  game.winPointForPlayer(2);
  game.winPointForPlayer(2);
  game.winPointForPlayer(2);

  return game;
}

function aGameWithPlayerHavingAdvantage(playerNumber: PlayerNumber) {
  const game = aGameWithDeuce();
  game.winPointForPlayer(playerNumber);
  return game;
}

function aCompletedGame() {
  const game = aGameWithDeuce();
  game.winPointForPlayer(1);
  game.winPointForPlayer(1);

  return game;
}

function aPlayerNumber(): PlayerNumber {
  return Math.random() > 0.5 ? 2 : 1;
}
