export class StringCalculator {
  private getSepator(values: string): string | RegExp {
    const DEFAULT_SEPARATOR = /[,\n]/;
    const hasCustomSeparator = values.indexOf(`//`) === 0;

    if (!hasCustomSeparator) {
      return DEFAULT_SEPARATOR;
    }

    const newLinePosition = values.search(/\n/);
    const customSeparator = values.slice(2, newLinePosition);

    return customSeparator;
  }

  private extractNumbers(values: string): Array<number> {
    const separator = this.getSepator(values);
    const sanitizedValues = values.replace(`//${separator}\n`, '');

    if (!sanitizedValues) {
      return [];
    }

    const numbers = sanitizedValues
      .split(separator)
      .map((value) => parseInt(value));

    return numbers;
  }

  private ensureNumbers(numbers: Array<number>): void {
    numbers.forEach((num) => {
      if (num < 0) throw new Error(`negatives not allowed ${num}`);
    });
  }

  add(values: string): number {
    const numbers = this.extractNumbers(values);
    this.ensureNumbers(numbers);
    return numbers.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
  }
}
