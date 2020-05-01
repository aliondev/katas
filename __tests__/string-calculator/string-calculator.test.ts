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
});
