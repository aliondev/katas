export class Greeting {
  private readonly HELLO = 'Hello';

  private greetSingle(name: string): string {
    const curatedName = name === null ? 'my friend' : name;

    if (curatedName.toUpperCase() === curatedName) {
      return `${this.HELLO} ${curatedName}!`.toUpperCase()
    }

    return `${this.HELLO}, ${curatedName}.`;
  }

  private greetMultipleMixed(names: Array<string>): string {
    const namesThatAreLowerCase = names.filter(name => name !== name.toUpperCase());
    const namesThatAreUpperCase = names.filter(name => name === name.toUpperCase());

    const greetForLowerCase = this.greetMultipleNormal(namesThatAreLowerCase);
    const greetForUpperCase = 'AND ' + this.greetMultipleShouting(namesThatAreUpperCase);

    return greetForLowerCase + ' ' + greetForUpperCase;
  }

  private greetMultiple(names: Array<string>): string {
    const hasLowerCaseNames = names.some(name => name !== name.toUpperCase());
    const hasUpperCaseNames = names.some(name => name === name.toUpperCase());

    if (hasLowerCaseNames && !hasUpperCaseNames) {
      return this.greetMultipleNormal(names);
    }

    if (hasLowerCaseNames && hasUpperCaseNames) {
      return this.greetMultipleMixed(names);
    }
  }

  private greetMultipleShouting(names: Array<string>): string {
    return this.greetMultipleNormal(names).toUpperCase().replace(',', '').replace('.', '!');
  }

  private greetMultipleNormal(names: Array<string>): string {
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