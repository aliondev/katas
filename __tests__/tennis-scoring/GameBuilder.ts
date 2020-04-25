import { Game, PlayerNumber } from '../../src/tennis-scoring/Game';

export class GameBuilder {
  static aGameAtDeuce(): Game {
    const game = new Game();

    game.winPointForPlayer(1);
    game.winPointForPlayer(1);
    game.winPointForPlayer(1);

    game.winPointForPlayer(2);
    game.winPointForPlayer(2);
    game.winPointForPlayer(2);

    return game;
  }

  static aGameWithPlayerWithAdvantage(playerNumber: PlayerNumber) {
    const game = GameBuilder.aGameAtDeuce();
    game.winPointForPlayer(playerNumber);

    return game;
  }

  static aCompletedGame(): Game {
    const game = GameBuilder.aGameAtDeuce();
    game.winPointForPlayer(1);
    game.winPointForPlayer(1);

    return game;
  }
}
