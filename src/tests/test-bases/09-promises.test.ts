import {getHeroeByIdAsync} from "../../test-bases/09-promises";
import heroes from "../../data/heroes";

describe('Tests in the 09-promises.test.ts file', () => {
    test('"getHeroeByIdAsync" should return a Hero async', (done) => {
        const idHero = 1;

        getHeroeByIdAsync(idHero).then(hero => {
            expect(hero).toEqual(heroes[0]);
            done();
        });
    });


    test('should return an error when no hero is rolled', (done) => {
        const idHero = 10;
        getHeroeByIdAsync(idHero).catch(error =>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    });
});