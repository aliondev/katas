export class Greeting {
  private readonly HELLO = 'Hello';
  private readonly AND = 'AND';

  greet(target: string | Array<string>): string {
    return Array.isArray(target)
      ? this.greetMultiple(target)
      : this.greetSingle(target);
  }

  private greetSingle(name: string): string {
    const curatedName = name === null ? 'my friend' : name;

    if (curatedName.toUpperCase() === curatedName) {
      return `${this.HELLO} ${curatedName}!`.toUpperCase()
    }

    return `${this.HELLO}, ${curatedName}.`;
  }

  private greetMultiple(names: Array<string>): string {
    const commaSeparatedNames = names.reduce((acc, curr) => {
      curr.split(',').forEach(item => acc.push(item));
      return acc;
    }, []);

    const upperCaseNames = commaSeparatedNames.filter(this.isUpperCase);
    const normalNames = commaSeparatedNames.filter(name => !this.isUpperCase(name));

    if (normalNames.length && !upperCaseNames.length) {
      return this.greetMultipleNormal(normalNames);
    }

    if(normalNames.length && upperCaseNames.length) {
      return `${this.greetMultipleNormal(normalNames)} ${this.AND} ${this.greetMultipleShouting(upperCaseNames)}`;
    }
  }

  private isUpperCase(name: string): boolean { return name === name.toUpperCase(); }

  private greetMultipleShouting(names: Array<string>): string {
    return this.greetMultipleNormal(names).toUpperCase().replace(',', '').replace('.', '!');
  }

  private greetMultipleNormal(names: Array<string>): string {
    const connector = this.AND.toLowerCase();

    if (names.length <= 2) {
      return `${this.HELLO}, ${names.join(` ${connector} `)}.`;
    }

    const namesWithoutLast = names.slice(0, -1);
    const lastOfNames = names[names.length - 1];

    return `${this.HELLO}, ${namesWithoutLast.join(', ')} ${connector} ${lastOfNames}.`;
  }
}