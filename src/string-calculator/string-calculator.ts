export class StringCalculator {
  private getSepator(values: string): string | RegExp {
    const DEFAULT_SEPARATOR = /[,\n]/;
    const hasCustomSeparator = values.indexOf(`//`) === 0;

    return hasCustomSeparator
      ? this.getCustomSeparator(values)
      : DEFAULT_SEPARATOR;
  }

  private headerHasWrappingBrackets(values: string): boolean {
    const newLinePosition = values.search(/\n/);
    const header = values.slice(2, newLinePosition);
    const hasWrappingBrackets = header[0] === '[' && header[header.length - 1] === ']';

    return hasWrappingBrackets;
  }

  private getCustomSeparator(values: string): string {
    const newLinePosition = values.search(/\n/);
    const header = values.slice(2, newLinePosition);

    return this.headerHasWrappingBrackets(values)
      ? header.replace('[', '').replace(']', '')
      : header;
  }

  private numbersFromString(values: string): Array<number> {
    const separator = this.getSepator(values);
    const sanitizedValues = this.headerHasWrappingBrackets(values)
      ? values.replace(`//[${separator}]\n`, '')
      : values.replace(`//${separator}\n`, '');

    if (!sanitizedValues) {
      return [];
    }

    const numbers = sanitizedValues
      .split(separator)
      .map((value) => parseInt(value));

    return numbers;
  }

  private ensureNumbersArePositive(numbers: Array<number>): void {
    const negativeNumbers = numbers.filter((num) => {
      if (num < 0) return num;
    });

    if (negativeNumbers.length) {
      throw new Error(`negatives not allowed ${negativeNumbers.toString()}`);
    }
  }

  private filterTooBigNumbers(numbers: Array<number>): Array<number> {
    return numbers.filter(num => num <= 1000);
  }

  add(values: string): number {
    const numbers = this.numbersFromString(values);

    this.ensureNumbersArePositive(numbers);

    const numbersLowerThanThousand = this.filterTooBigNumbers(numbers);

    return numbersLowerThanThousand.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
  }
}
