import { Player } from '../../src/tennis-scoring/Player';
import { Score } from '../../src/tennis-scoring/Score';

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
});
