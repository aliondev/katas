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

    return this.isUpperCase(curatedName)
      ? this.greetSingleShouting(curatedName)
      : this.greetSingleNormal(curatedName);
  }

  private greetSingleNormal(name: string): string {
    return `${this.HELLO}, ${name}.`;
  }

  private greetSingleShouting(name: string): string {
    return `${this.HELLO} ${name}!`.toUpperCase()
  };

  private greetMultiple(names: Array<string>): string {
    const sanitizedNames = this.getSanitizedNames(names);
    const upperCaseNames = sanitizedNames.filter(this.isUpperCase);
    const normalNames = sanitizedNames.filter(name => !this.isUpperCase(name));

    if (normalNames.length && !upperCaseNames.length) {
      return this.greetMultipleNormal(normalNames);
    }

    if(normalNames.length && upperCaseNames.length) {
      return `${this.greetMultipleNormal(normalNames)} ${this.AND} ${this.greetMultipleShouting(upperCaseNames)}`;
    }
  }

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

  private isUpperCase(name: string): boolean { return name === name.toUpperCase(); }

  private getSanitizedNames(names: Array<string>) {
    const INTENTIONAL_COMMA_REGEX = /\",\"/;
    const TEMPORAL_SEPARATOR = '$TEMPORAL_SEPARATOR$';
    const COMMA = ',';

    const sanitizedNames = names.reduce((acc, curr) => {
      const hidingIntentionalComma = hideIntentionalComma(curr);
      const separatedByComma = splitByComma(hidingIntentionalComma);
      const withIntentionalCommas = separatedByComma.map(addIntentionalComma);
      return acc.concat(withIntentionalCommas);
    }, []);

    return sanitizedNames;

    function hideIntentionalComma(name) { return name.replace(INTENTIONAL_COMMA_REGEX, TEMPORAL_SEPARATOR); }
    function splitByComma(name) { return name.split(COMMA); }
    function addIntentionalComma(name) { return name.trim().replace(TEMPORAL_SEPARATOR, COMMA); }
  }
}