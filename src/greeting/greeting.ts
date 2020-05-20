export class Greeting {
  greet(name: string): string {
    const target = name === null ? 'my friend' : name;

    return `Hello, ${target}.`;
  }
}