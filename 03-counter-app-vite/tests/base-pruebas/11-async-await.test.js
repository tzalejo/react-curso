import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Prueba 11 async and await', () => {
  test('getImagen debe de retornar un URL de una imagen', async () => {
    const url = await getImagen();

    expect(typeof url).toBe('string');
  });
});
