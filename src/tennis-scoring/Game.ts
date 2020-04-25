import { Player } from '../../src/tennis-scoring/Player';
import { Score } from '../../src/tennis-scoring/Score';

export type PlayerNumber = 1 | 2;

export class Game {
  player1: Player;
  player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

  winPointForPlayer(playerNumber: PlayerNumber) {
    if (this.player1.isDeuced()) {
      if (playerNumber === 1) {
        this.player1.winPoint();
        this.player2.removeDeuced();
      } else {
        this.player2.winPoint();
        this.player1.removeDeuced();
      }

      return;
    }

    if (playerNumber === 1) {
      this.player1.winPoint();
    } else {
      this.player2.winPoint();
    }

    const bothHave40 =
      this.player1.score().equals(Score.of40()) &&
      this.player2.score().equals(Score.of40());

    if (bothHave40) {
      this.player1.setDeuced();
      this.player2.setDeuced();
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
