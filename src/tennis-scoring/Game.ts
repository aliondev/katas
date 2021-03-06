import { Player } from '../../src/tennis-scoring/Player';
import { Score } from '../../src/tennis-scoring/Score';
import { PointAfterGameCompletedError } from './PointAfterGameCompletedError';

export type PlayerNumber = 1 | 2;

export class Game {
  private player1: Player;
  private player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

  winPointForPlayer(playerNumber: PlayerNumber) {
    const player = this.getPlayer(playerNumber);
    const oponent = this.getOponentOf(playerNumber);

    this.ensureGameIsNotCompleted();

    if (player.hasScore(Score.of40()) && oponent.hasAdvantage()) {
      this.deucePlayers();
      return;
    }

    player.winPoint();
    this.manageDeuceState();
  }

  scoreOfPlayer(playerNumber: PlayerNumber): Score {
    const player = this.getPlayer(playerNumber);
    return player.score();
  }

  completed = (): boolean => !!this.winner();

  winner() {
    if (this.player1.isWinner()) {
      return 1;
    } else if (this.player2.isWinner()) {
      return 2;
    }
  }

  private ensureGameIsNotCompleted() {
    if (this.completed()) {
      throw new PointAfterGameCompletedError();
    }
  }

  private deucePlayers() {
    this.player1.setDeuceScore();
    this.player2.setDeuceScore();
  }

  private manageDeuceState() {
    const bothHave40 =
      this.player1.hasScore(Score.of40()) &&
      this.player2.hasScore(Score.of40());

    if (bothHave40) {
      this.deucePlayers();
      return;
    }

    if (this.player1.hasDeuceScore() && this.player2.hasAdvantage()) {
      this.player1.unsetDeuceScore();
      return;
    }

    if (this.player2.hasDeuceScore() && this.player1.hasAdvantage()) {
      this.player2.unsetDeuceScore();
      return;
    }
  }

  private getPlayer(playerNumber: PlayerNumber) {
    return playerNumber === 1 ? this.player1 : this.player2;
  }

  private getOponentOf(playerNumber: PlayerNumber) {
    return playerNumber === 1 ? this.player2 : this.player1;
  }
}
