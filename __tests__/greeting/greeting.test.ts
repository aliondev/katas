import { Greeting } from '../../src/greeting/greeting';

describe('Greeting kata', () => {
    const greeting = new Greeting();

    it('has a method that perform a simple greeting with a name', () => {
      expect(greeting.greet('John')).toBe('Hello, John.');
      expect(greeting.greet('Louis')).toBe('Hello, Louis.');
      expect(greeting.greet('Thomas')).toBe('Hello, Thomas.');
    });

    it('handles null name greeting to a friend', () => {
      expect(greeting.greet(null)).toBe('Hello, my friend.');
    });

    it('shouts to the person if the name has all its letters uppercase', () => {
      expect(greeting.greet('JOHN')).toBe('HELLO JOHN!');
      expect(greeting.greet('LOUIS')).toBe('HELLO LOUIS!');
      expect(greeting.greet('THOMAS')).toBe('HELLO THOMAS!');
    });

    it('handles two names', () => {
      expect(greeting.greet(['John', 'Louis'])).toBe('Hello, John and Louis.');
      expect(greeting.greet(['Louis', 'John'])).toBe('Hello, Louis and John.');
    });

    it('handles multiple names', () => {
      expect(greeting.greet(['John', 'Louis', 'Tom']))
        .toBe('Hello, John, Louis and Tom.');

      expect(greeting.greet(['Louis', 'Tom', 'John']))
        .toBe('Hello, Louis, Tom and John.');
    });

    it('handles mix of shouted and normal names', () => {
      expect(greeting.greet(['John', 'Louis', 'TOM']))
        .toBe('Hello, John and Louis. AND HELLO TOM!');

      expect(greeting.greet(['John', 'LOUIS', 'Tom']))
        .toBe('Hello, John and Tom. AND HELLO LOUIS!');

      expect(greeting.greet(['JOHN', 'LOUIS', 'Tom']))
        .toBe('Hello, Tom. AND HELLO JOHN AND LOUIS!');
    });

    it('splits names with commas in entries', () => {
      expect(greeting.greet(['John,Bob', 'Michael']))
        .toBe('Hello, John, Bob and Michael.');
    });
});