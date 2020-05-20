import { Greeting } from '../../src/greeting/greeting';

describe('Greeting kata', () => {
    it('has a method that perform a simple greeting with a name', () => {
        const greeting = new Greeting();

        expect(greeting.greet('John')).toBe('Hello, John.');
        expect(greeting.greet('Louis')).toBe('Hello, Louis.');
        expect(greeting.greet('Thomas')).toBe('Hello, Thomas.');
    });
});