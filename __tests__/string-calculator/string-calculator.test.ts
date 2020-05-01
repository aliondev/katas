import { StringCalculator } from '../../src/string-calculator/string-calculator';

describe('String Calculator', () => {
  it('returns 0 if does not receives values', () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add('');

    expect(result).toBe(0);
  });

  it('returns the same value if receives just one number', () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add('30');

    expect(result).toBe(30);
  });

  it('returns the sum of two values', () => {
    const stringCalculator = new StringCalculator();

    const sum10plus10 = stringCalculator.add('10,10');
    const sum30plus10 = stringCalculator.add('10,30');
    const sum30plus30 = stringCalculator.add('30,30');

    expect(sum10plus10).toBe(20);
    expect(sum30plus10).toBe(40);
    expect(sum30plus30).toBe(60);
  });
});
