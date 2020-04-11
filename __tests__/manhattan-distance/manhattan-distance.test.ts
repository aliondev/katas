import {
  manhattanDistance,
  Point,
} from '../../src/manhattan-distance/manhattan-distance';

describe('ManhattanDistance', () => {
  it('returns 0 if both points are in the same place', () => {
    const VALUE = 20;
    const pointA = new Point(VALUE, VALUE);
    const pointB = new Point(VALUE, VALUE);

    const distance = manhattanDistance(pointA, pointB);

    expect(distance).toBe(0);
  });

  it('calculates the distance between two points in the same horizontal line', () => {
    const X = 10;
    const pointA = new Point(X, 5);
    const pointB = new Point(X, 3);

    const distance = manhattanDistance(pointA, pointB);

    expect(distance).toBe(2);
  });

  it('calculates the distance between two points in the same vertical line', () => {
    const Y = 30;
    const pointA = new Point(5, Y);
    const pointB = new Point(3, Y);

    const distance = manhattanDistance(pointA, pointB);

    expect(distance).toBe(2);
  });

  it('calculates the distance between two points that are in diagonal', () => {
    const pointA = new Point(5, 4);
    const pointB = new Point(3, 2);

    const distance = manhattanDistance(pointA, pointB);

    expect(distance).toBe(4);
  });

  it('calculates the distance when points are in different quadrants', () => {
    const pointA = new Point(-5, 4);
    const pointB = new Point(3, -2);

    const distance = manhattanDistance(pointA, pointB);

    expect(distance).toBe(14);
  });

  it('calculates the same distance independently of the points order', () => {
    const pointA = new Point(5, 4);
    const pointB = new Point(3, 2);

    const directDistance = manhattanDistance(pointA, pointB);
    const reverseDistance = manhattanDistance(pointB, pointA);

    expect(directDistance).toBe(reverseDistance);
  });
});
