export class StringCalculator {
  add(values: string): number {
    const [value1, value2] = values.split(',');
    if (!value1) {
      return 0;
    }
    if (!value2) {
      return parseInt(values);
    }
    return parseInt(value1) + parseInt(value2);
  }
}
