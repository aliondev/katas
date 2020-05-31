import { Greeting } from '../../src/greeting/greeting';

describe('Greeting kata', () => {
    const greeting = new Greeting();

    it('has a method that perform a simple greeting with a name', () => {
      expect(greeting.greet('John')).toBe('Hello, John.');
    });

    it('handles null name greeting to a friend', () => {
      expect(greeting.greet(null)).toBe('Hello, my friend.');
    });

    it('shouts to the person if the name has all its letters uppercase', () => {
      expect(greeting.greet('JOHN')).toBe('HELLO JOHN!');
    });

    it('handles two names', () => {
      expect(greeting.greet(['John', 'Louis'])).toBe('Hello, John and Louis.');
    });

    it('handles multiple names', () => {
      expect(greeting.greet(['John', 'Louis', 'Tom']))
        .toBe('Hello, John, Louis and Tom.');
    });

    it('handles mix of shouted and normal names', () => {
      expect(greeting.greet(['John', 'LOUIS', 'Tom']))
        .toBe('Hello, John and Tom. AND HELLO LOUIS!');
    });

    it('handles multiples shouted names', () => {
      expect(greeting.greet(['JOHN', 'LOUIS', 'TOM']))
        .toBe('HELLO JOHN, LOUIS AND TOM!');
    });

    it('splits names with commas in entries', () => {
      expect(greeting.greet(['John,Bob', 'Michael']))
        .toBe('Hello, John, Bob and Michael.');
    });

    it('allows intentional commas in names when scaped with double quotes', () => {
        expect(greeting.greet(['Thomas', 'George', 'John","Bob', 'Michael']))
        .toBe('Hello, Thomas, George, John,Bob and Michael.')
    });
});