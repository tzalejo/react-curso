import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Prueba en 09 promesas', () => {

  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
      done(); // hay q decirle a jest que termino de ejecutar el codigo.
    });
  });

  test('getHeroeByIdAsync debe de retornar un error cuando no exista el heroe', (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
    //   .catch((hero) => {
    //     expect(hero).toBeFalsy();
    //     done();
    //   })
      .catch((error) => {
        expect(error).toBe('No se pudo encontrar el héroe ' + id);
        done(); // hay q decirle a jest que termino de ejecutar el codigo.
      });
  });
});
