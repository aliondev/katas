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

  isDeuced(): boolean {
    return this._score.equals(Score.ofDeuced());
  }
}
