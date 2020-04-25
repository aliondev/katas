import { Player } from '../../src/tennis-scoring/Player';
import { Score } from '../../src/tennis-scoring/Score';

export type PlayerNumber = 1 | 2;

export class Game {
  private player1: Player;
  private player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

  winPointForPlayer(playerNumber: PlayerNumber) {
    if (playerNumber === 1) {
      this.player1.winPoint();
    } else {
      this.player2.winPoint();
    }

    this.manageDeuce();
  }

  private manageDeuce() {
    const bothHave40 =
      this.player1.score().equals(Score.of40()) &&
      this.player2.score().equals(Score.of40());

    if (bothHave40) {
      this.player1.setDeuced();
      this.player2.setDeuced();
    }

    if (
      this.player1.isDeuced() &&
      this.player2.score().equals(Score.ofAdvantage())
    ) {
      this.player1.removeDeuced();
    }

    if (
      this.player2.isDeuced() &&
      this.player1.score().equals(Score.ofAdvantage())
    ) {
      this.player2.removeDeuced();
    }
  }

  scoreOfPlayer(playerNumber: PlayerNumber): Score {
    return playerNumber === 1 ? this.player1.score() : this.player2.score();
  }

  completed = (): boolean => !!this.winner();

  winner() {
    const winnerScore = Score.ofGame();
    const player1IsWinner = this.player1.score().equals(winnerScore);
    const player2IsWinner = this.player2.score().equals(winnerScore);

    if (player1IsWinner) {
      return 1;
    } else if (player2IsWinner) {
      return 2;
    }
  }
}
