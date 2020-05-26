export class Greeting {
  greet(name: string): string {
    const target = name === null ? 'my friend' : name;
    const sentence = `Hello, ${target}`;

    if (target.toUpperCase() === target) {
      return `${sentence}!`.toUpperCase()
    }

    return `${sentence}.`;
  }
}