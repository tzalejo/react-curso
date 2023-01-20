import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Prueba 07 desestructuracion de array', () => {
  test('Debe de retornar un string y un numero', () => {
    const [letra, numero] = retornaArreglo();

    // expect(letra).toBe('ABC');
    expect(letra).toEqual(expect.any(String));
    // expect(numero).toBe(123);
    expect(numero).toEqual(expect.any(Number)); // aca verificamos para cualquier dato de tipo numero..

    // evaluamos los tipos de datos..
    expect(typeof letra).toBe('string');
    expect(typeof numero).toBe('number');
  });
});
