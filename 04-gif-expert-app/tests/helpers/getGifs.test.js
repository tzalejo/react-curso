import { getGifGrid } from './../../src/Helpers/getGifs.js';

describe('test getGif', () => {
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifGrid('One Punch');

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(Object), // espera cualquier string
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
