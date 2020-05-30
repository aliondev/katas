export class Greeting {
  private greetSingle(name: string): string {
    const curatedName = name === null ? 'my friend' : name;
    const sentence = `Hello, ${curatedName}`;

    if (curatedName.toUpperCase() === curatedName) {
      return `${sentence}!`.toUpperCase()
    }

    return `${sentence}.`;
  }

  private greetMultiple(names: Array<string>): string {
    return `Hello, ${names.join(' and ')}.`;
  }

  greet(target: string | Array<string>): string {
    return Array.isArray(target)
      ? this.greetMultiple(target)
      : this.greetSingle(target);
  }
}