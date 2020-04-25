import { Player } from '../../src/tennis-scoring/Player';
import { Score } from '../../src/tennis-scoring/Score';
import { Game, PlayerNumber } from '../../src/tennis-scoring/Game';

describe('Tennis Scoring kata', () => {
  it('allows players to score', () => {
    const player = new Player();

    expect(player.score().equals(Score.of0())).toBe(true);

    player.winPoint();
    expect(player.score().equals(Score.of15())).toBe(true);

    player.winPoint();
    expect(player.score().equals(Score.of30())).toBe(true);

    player.winPoint();
    expect(player.score().equals(Score.of40())).toBe(true);

    player.winPoint();
    expect(player.score().equals(Score.ofGame())).toBe(true);
  });

  it('makes the game able to be completed with a winner', () => {
    const game = new Game();
    const playerNumber = aPlayerNumber();

    expect(game.completed()).toBe(false);
    expect(game.winner()).toBe(undefined);

    game.winPointForPlayer(playerNumber);
    game.winPointForPlayer(playerNumber);
    game.winPointForPlayer(playerNumber);

    expect(game.completed()).toBe(false);
    expect(game.winner()).toBe(undefined);

    game.winPointForPlayer(playerNumber);

    expect(game.completed()).toBe(true);
    expect(game.winner()).toBe(playerNumber);
  });
});

function aPlayerNumber(): PlayerNumber {
  return Math.random() > 0.5 ? 2 : 1;
}
