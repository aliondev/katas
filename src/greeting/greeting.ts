export class Greeting {
  private readonly HELLO = 'Hello';

  private greetSingle(name: string): string {
    const curatedName = name === null ? 'my friend' : name;
    const sentence = `${this.HELLO}, ${curatedName}`;

    if (curatedName.toUpperCase() === curatedName) {
      return `${sentence}!`.toUpperCase()
    }

    return `${sentence}.`;
  }

  private greetMultiple(names: Array<string>): string {
    const AND = 'and';

    if (names.length <= 2) {
      return `${this.HELLO}, ${names.join(` ${AND} `)}.`;
    }

    const namesWithoutLast = names.slice(0, -1);
    const lastOfNames = names[names.length - 1];

    return `${this.HELLO}, ${namesWithoutLast.join(', ')} ${AND} ${lastOfNames}.`;
  }

  greet(target: string | Array<string>): string {
    return Array.isArray(target)
      ? this.greetMultiple(target)
      : this.greetSingle(target);
  }
}