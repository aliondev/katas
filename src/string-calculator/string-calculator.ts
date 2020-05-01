export class StringCalculator {
  add(values: string): number {
    const numbers = values.split(',').map((value) => parseInt(value));

    if (!numbers[0]) {
      return 0;
    }
    if (!numbers[1]) {
      return parseInt(values);
    }

    return numbers.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
  }
}
