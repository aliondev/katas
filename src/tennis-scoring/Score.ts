export class Score {
  private constructor(private value: ScoreValue) {}
  static of0(): Score {
    return new Score(ScoreValue.ZERO);
  }
  static of15(): Score {
    return new Score(ScoreValue.FIFTEEN);
  }
  static of30(): Score {
    return new Score(ScoreValue.THIRTY);
  }
  static of40(): Score {
    return new Score(ScoreValue.FOURTY);
  }
  static ofDeuced(): Score {
    return new Score(ScoreValue.DEUCED);
  }
  static ofAdvantage(): Score {
    return new Score(ScoreValue.ADVANTAGE);
  }
  static ofGame(): Score {
    return new Score(ScoreValue.GAME);
  }
  next(): Score {
    if (this.equals(Score.of0())) {
      return Score.of15();
    } else if (this.equals(Score.of15())) {
      return Score.of30();
    } else if (this.equals(Score.of30())) {
      return Score.of40();
    } else if (this.equals(Score.ofDeuced())) {
      return Score.ofAdvantage();
    }
    return Score.ofGame();
  }
  equals(otherScore: Score) {
    return this.value === otherScore.value;
  }
}

enum ScoreValue {
  ZERO = '0',
  FIFTEEN = '15',
  THIRTY = '30',
  FOURTY = '40',
  DEUCED = 'DEUCED',
  ADVANTAGE = 'ADVANTAGE',
  GAME = 'GAME',
}
