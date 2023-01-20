import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Prueba en 05 funciones', () => {
  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    // no usar toBe cuando son objetos
    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const miNombre = 'Alejandro';

    const testUser = {
      uid: 'ABC567',
      username: miNombre,
    };

    const user = getUsuarioActivo(miNombre);

    expect(testUser).toEqual(user);
  });
});
