import { Game } from '../../src/tennis-scoring/tennis-scoring';

describe('Tennis scoring', () => {
  it('is defined', () => {
    const game = new Game();
    expect(game).toBeDefined();
  });
});
