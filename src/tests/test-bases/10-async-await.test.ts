import {getImagen} from "../../test-bases/10-async-await";

describe('Tests in the 10-async-await.test.ts file', () => {
    test('should return the url of an image', async () => {
        const url = await getImagen();
        console.log(url)
        expect(url.includes('http')).toBe(true);
    })
})