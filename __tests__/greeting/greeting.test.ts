import { Greeting } from '../../src/greeting/greeting';

describe('Greeting kata', () => {
    it('has a method that perform a simple greeting with a name', () => {
        const greeting = new Greeting();

        expect(greeting.greet('John')).toBe('Hello, John.');
        expect(greeting.greet('Louis')).toBe('Hello, Louis.');
        expect(greeting.greet('Thomas')).toBe('Hello, Thomas.');
    });

    it('handles null name greeting to a friend', () => {
        const greeting = new Greeting();

        expect(greeting.greet(null)).toBe('Hello, my friend.');
    });

    it('shouts to the person if the name has all its letters uppercase', () => {
        const greeting = new Greeting();
        expect(greeting.greet('JOHN')).toBe('HELLO, JOHN!');
        expect(greeting.greet('LOUIS')).toBe('HELLO, LOUIS!');
        expect(greeting.greet('THOMAS')).toBe('HELLO, THOMAS!');
    });

    it('handles two names', () => {
        const greeting = new Greeting();
        expect(greeting.greet(['John', 'Louis'])).toBe('Hello, John and Louis.')
        expect(greeting.greet(['Louis', 'John'])).toBe('Hello, Louis and John.')
    });

    it('handles multiple names', () => {
        const greeting = new Greeting();
        expect(greeting.greet(['John', 'Louis', 'Tom'])).toBe('Hello, John, Louis and Tom.')
        expect(greeting.greet(['Louis', 'Tom', 'John'])).toBe('Hello, Louis, Tom and John.')
    });
});