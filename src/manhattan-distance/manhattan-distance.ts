export function manhattanDistance(pointA: Point, pointB: Point): number {
  return pointA.distanceTo(pointB);
}

export class Point {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceTo(otherPoint: Point) {
    const horizontalDistance = Math.abs(this.x - otherPoint.x);
    const verticalDistance = Math.abs(this.y - otherPoint.y);

    return horizontalDistance + verticalDistance;
  }
}
