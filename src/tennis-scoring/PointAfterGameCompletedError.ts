export class PointAfterGameCompletedError extends Error {
  constructor() {
    super('Trying to win points when game is completed');
  }
}
