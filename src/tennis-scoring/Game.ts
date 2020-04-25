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
    if (playerNumber === 1) {
      this.player1.winPoint();
      return;
    }
    this.player2.winPoint();
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
