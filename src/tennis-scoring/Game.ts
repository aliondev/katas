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
    const oponent = this.getOponentOf(playerNumber);
    const player = this.getPlayer(playerNumber);

    if (player.hasScore(Score.of40()) && oponent.hasAdvantage()) {
      player.setDeuced();
      oponent.setDeuced();
    } else {
      player.winPoint();
    }

    this.manageDeuceState();
  }

  private manageDeuceState() {
    const bothHave40 =
      this.player1.hasScore(Score.of40()) &&
      this.player2.hasScore(Score.of40());

    if (bothHave40) {
      this.player1.setDeuced();
      this.player2.setDeuced();
    }

    if (this.player1.isDeuced() && this.player2.hasAdvantage()) {
      this.player1.removeDeuced();
    }

    if (this.player2.isDeuced() && this.player1.hasAdvantage()) {
      this.player2.removeDeuced();
    }
  }

  private getPlayer(playerNumber: PlayerNumber) {
    return playerNumber === 1 ? this.player1 : this.player2;
  }

  private getOponentOf(playerNumber: PlayerNumber) {
    return playerNumber === 1 ? this.player2 : this.player1;
  }

  scoreOfPlayer(playerNumber: PlayerNumber): Score {
    const player = this.getPlayer(playerNumber);
    return player.score();
  }

  completed = (): boolean => !!this.winner();

  winner() {
    const winnerScore = Score.ofGame();
    const player1IsWinner = this.player1.hasScore(winnerScore);
    const player2IsWinner = this.player2.hasScore(winnerScore);

    if (player1IsWinner) {
      return 1;
    } else if (player2IsWinner) {
      return 2;
    }
  }
}
