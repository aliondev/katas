export class StringCalculator {
  add(values: string): number {
    if (values.length) {
      return parseInt(values);
    }
    return 0;
  }
}
