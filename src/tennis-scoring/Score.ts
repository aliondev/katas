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
  static ofDeuce(): Score {
    return new Score(ScoreValue.DEUCE);
  }
  static ofAdvantage(): Score {
    return new Score(ScoreValue.ADVANTAGE);
  }
  static ofGame(): Score {
    return new Score(ScoreValue.GAME);
  }
  next(): Score {
    switch (this.value) {
      case ScoreValue.ZERO:
        return Score.of15();
      case ScoreValue.FIFTEEN:
        return Score.of30();
      case ScoreValue.THIRTY:
        return Score.of40();
      case ScoreValue.DEUCE:
        return Score.ofAdvantage();
      default:
        return Score.ofGame();
    }
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
  DEUCE = 'DEUCE',
  ADVANTAGE = 'ADVANTAGE',
  GAME = 'GAME',
}
