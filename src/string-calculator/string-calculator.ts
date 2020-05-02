export class StringCalculator {
  private extractCustomSeparator(values: string): string | undefined {
    const hasCustomSeparator = values.indexOf(`//`) === 0;

    if (!hasCustomSeparator) {
      return undefined;
    }

    const newLinePosition = values.search(/\n/);
    const customSeparator = values.slice(2, newLinePosition);

    return customSeparator;
  }

  private extractNumbers(values: string): Array<number> {
    const DEFAULT_SEPARATOR = /[,\n]/;
    const customSeparator = this.extractCustomSeparator(values);
    const sanitizedValues = values.replace(`//${customSeparator}\n`, '');
    const separator = customSeparator || DEFAULT_SEPARATOR;

    const numbers = sanitizedValues
      .split(separator)
      .map((value) => parseInt(value));

    return numbers;
  }

  add(values: string): number {
    const numbers = this.extractNumbers(values);

    if (!numbers[0]) {
      return 0;
    }

    return numbers.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
  }
}
