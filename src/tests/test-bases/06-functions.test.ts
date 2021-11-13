import {getActiveUser, getUser} from "../../test-bases/06-functions";


describe('Tests in the 06-functions.test.ts file', () => {
    test('The function "getUser" should return an object literal', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual(userTest);
    })


    test('The function "getActiveUser" should return an object literal', () => {
        const userName = 'Francisco';
        const user = getActiveUser(userName);

        expect(user).toEqual({
            uid: 'ABC567',
            username: userName
        });

    })
})