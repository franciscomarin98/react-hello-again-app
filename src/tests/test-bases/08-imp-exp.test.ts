import {getHeroeById, getHeroesByOwner} from "../../test-bases/08-imp-exp";
import heroes from "../../data/heroes";

describe('Tests in the 08-imp-exp.test.ts file', () => {
    test('should return a hero by id.', () => {
        const idHero = 1;
        const heroe = getHeroeById(idHero);

        const heroeData = heroes.find(heroe => heroe.id === idHero);
        expect(heroe).toEqual(heroeData);
    });

    test('should return undefined if not found a hero by id.', () => {
        const idHero = 10;
        const heroe = getHeroeById(idHero);

        expect(heroe).toBe(undefined);
    });

    test("should return a array with DC's heroes", () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroeData);
    });

    test("should return a array with Marvel's heroes", () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});