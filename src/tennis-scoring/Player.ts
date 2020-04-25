import { Score } from './Score';
export class Player {
  private _score: Score = Score.of0();
  score(): Score {
    return this._score;
  }

  winPoint(): void {
    this._score = this._score.next();
  }

  setDeuced() {
    this._score = Score.ofDeuced();
  }

  removeDeuced() {
    this._score = Score.of40();
  }

  hasScore(score: Score) {
    return this._score.equals(score);
  }

  isDeuced(): boolean {
    return this.hasScore(Score.ofDeuced());
  }

  hasAdvantage(): boolean {
    return this.hasScore(Score.ofAdvantage());
  }

  isWinner(): boolean {
    return this.hasScore(Score.ofGame());
  }
}
