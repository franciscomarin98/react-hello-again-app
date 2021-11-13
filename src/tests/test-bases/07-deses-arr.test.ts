import {retornaArreglo} from "../../test-bases/07-deses-arr";

describe('Tests in the 07-deses-arr.ts file', () => {
    test('should return a string and a number', () => {
        const [letras, numeros] = retornaArreglo();
        // expect(arr).toEqual(['ABC', 123]);


        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');


        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    })
})