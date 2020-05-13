export class StringCalculator {
  add(values: string): number {
    const numbers = this.numbersFromString(values);

    this.ensureNumbersArePositive(numbers);

    const numbersLowerThanThousand = this.filterTooBigNumbers(numbers);

    return numbersLowerThanThousand.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
  }

  private numbersFromString(values: string): Array<number> {
    const header = this.getHeader(values);
    const separatorsRegex = this.getSeparatorsRegex(header);
    const valuesWithoutHeader = values.replace(header, '');

    const numbers = valuesWithoutHeader
      .split(separatorsRegex)
      .map(value=> parseInt(value));

    return numbers;
  }

  private ensureNumbersArePositive(numbers: Array<number>): void {
    const negativeNumbers = numbers.filter(num => num < 0);

    if (negativeNumbers.length) {
      throw new Error(`negatives not allowed ${negativeNumbers.toString()}`);
    }
  }

  private filterTooBigNumbers(numbers: Array<number>): Array<number> {
    return numbers.filter(num => num <= 1000);
  }

  private getHeader(values: string): string {
    const hasHeader = values.indexOf(`//`) === 0;
    const newLinePosition = values.search(/\n/);

    if (!hasHeader) { return ''; }

    return values.slice(0, newLinePosition + 1);
  }

  private getSeparatorsRegex(values: string): RegExp {
    const DEFAULT_SEPARATORS = [',','\n'];
    const BRACKETS_REGEX = /[\[\]]/;
    const header = this.getHeader(values);

    const separatorsInHeader = header.split(BRACKETS_REGEX).filter(item => item);
    const separators = separatorsInHeader.length ? separatorsInHeader : DEFAULT_SEPARATORS;

    return new RegExp(`[${separators.join(',')}]`)
  }
}
