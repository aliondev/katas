import { StringCalculator } from '../../src/string-calculator/string-calculator';

describe('String Calculator', () => {
  const stringCalculator = new StringCalculator();
  it('returns 0 if does not receives values', () => {
    const result = stringCalculator.add('');

    expect(result).toBe(0);
  });

  it('returns the same value if receives just one number', () => {
    const result = stringCalculator.add('30');

    expect(result).toBe(30);
  });

  it('returns the sum of two values', () => {
    const sum10plus10 = stringCalculator.add('10,10');
    const sum30plus10 = stringCalculator.add('10,30');
    const sum30plus30 = stringCalculator.add('30,30');

    expect(sum10plus10).toBe(20);
    expect(sum30plus10).toBe(40);
    expect(sum30plus30).toBe(60);
  });

  it('returns the sum of any amount of values', () => {
    const sumFrom1to3 = stringCalculator.add('1,2,3');
    const sumFrom1to5 = stringCalculator.add('1,2,3,4,5');
    const sumFrom1to10 = stringCalculator.add('1,2,3,4,5,6,7,8,9,10');

    expect(sumFrom1to3).toBe(6);
    expect(sumFrom1to5).toBe(15);
    expect(sumFrom1to10).toBe(55);
  });

  it('accepts new line character as separator', () => {
    const withOnlyCommas = stringCalculator.add('1,2,3');
    const withBothSeparators = stringCalculator.add('1\n2,3');
    const withOnlyNewLine = stringCalculator.add('1\n2\n3');

    expect(withOnlyCommas).toBe(6);
    expect(withBothSeparators).toBe(6);
    expect(withOnlyNewLine).toBe(6);
  });

  it('accepts custom separators specified at the beggining at the string using a //DELIMITER/\n pattern', () => {
    const AT = '@';
    const DOT = '.';
    const numbers = [1, 2, 3];
    const valuesWithDot = buildValuesWithCustomSeparator(DOT, numbers);
    const valuesWithAt = buildValuesWithCustomSeparator(AT, numbers);

    const resultWithAt = stringCalculator.add(valuesWithAt);
    const resultWithDot = stringCalculator.add(valuesWithDot);

    expect(resultWithAt).toBe(6);
    expect(resultWithDot).toBe(6);
  });

  it('should throw an exception if there is a negative number', (done) => {
    const values = '-1,2,3';
    const expectedError = 'negatives not allowed -1';

    try {
      stringCalculator.add(values);
    } catch (error) {
      expect(error.message).toBe(expectedError);
      done();
    }
  });

  it('should throw an exception if there are several negative numbers', (done) => {
    const values = '-1,-2,3';
    const expectedError = 'negatives not allowed -1,-2';

    try {
      stringCalculator.add(values);
    } catch (error) {
      expect(error.message).toBe(expectedError);
      done();
    }
  });

  it('does not take into account numbers bigger than 1000', () => {
    const values = '5,10,1001';

    const result = stringCalculator.add(values);

    expect(result).toBe(15);
  })
});

const buildValuesWithCustomSeparator = (
  customSeparator: string,
  numbers: Array<number>,
): string => {
  const header = `//${customSeparator}\n`;
  const separatedNumbers = numbers.join(customSeparator);

  return `${header}${separatedNumbers}`;
};
