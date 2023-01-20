import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prueba 11 async and await', () => {
  test('getImagen debe de retornar un URL de una imagen', async () => {
    const apiKey = '4ydUL7SdFZPIAh84Xyj4JVTAmLfMn0Kf';
    const url = await getImagen(apiKey);

    expect(typeof url).toBe('string');
  });

  test('getImagen debe de retornar un error si no tenemos api key', async () => {
    const apiKey = '';
    const resp = await getImagen(apiKey);

    expect(resp).toBe('No se encontro la imagen');
  });
});
