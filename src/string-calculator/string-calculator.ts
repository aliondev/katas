export class StringCalculator {
  add(values: string): number {
    const SEPARATOR = /[,\n]/;
    const numbers = values.split(SEPARATOR).map((value) => parseInt(value));

    if (!numbers[0]) {
      return 0;
    }

    return numbers.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
  }
}
