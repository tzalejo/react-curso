import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Prueba en 06 desestructuracion de objetos', () => {
  test('usContext retorna un objeto desestructurando sus parametros', () => {
    const persona = {
      nombre: 'Alejandro',
      edad: 31,
      clave: 'Ale',
    };

    const objFuncion = usContext(persona);

    expect({
      nombreClave: 'Ale',
      anios: 31,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    }).toEqual(objFuncion);
  });
});
