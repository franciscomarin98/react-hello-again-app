import {getGreeting} from "../../test-bases/05-template-string";

describe('Tests in the 05-template-string.test.ts file', () => {
    test('should show "Hello Francisco Marin"', () => {
        const fullName = 'Francisco Marin';
        const greeting = getGreeting(fullName);

        expect(greeting).toBe(`Hello ${fullName}`)
    });

    test('should show "Hello World", if full name is not sent', () => {
        const greeting = getGreeting();
        expect(greeting).toBe('Hello World');
    })
});