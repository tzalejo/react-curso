import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from './../../src/hooks/useFetchGifs.js';

describe('Prueba de el hook useFetchGifs', () => {
  test('deb de regresar el estado inicial', () => {
    // para ejecutar este hooks se necesita parte del
    // ciclo de vida los componentes de react
    // const {images, isLoading } = useFetchGifs()
    // por ellos utilizamos este renderHook
    const { result } = renderHook(() => useFetchGifs('Dragon ball'));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0); // es el estado inicial, por ende no hay imagenes
    expect(isLoading).toBeTruthy(); // sabes que es verdadero el estado inicial de isLoading
  });

  test('debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
    // esta prueba debemos de ver el  cambio del estado inicial
    // osea cuando se monta el componente pasa a estado inicial
    // y luego ejecuta el useEffect el cual devuelve la images
    // y cambia el estado a false de isLoading
    // por ellos evaluamos el resultado de este componente.

    // llamaos al hooks
    const { result } = renderHook(() => useFetchGifs('Dragon ball'));
    // y devemos de esperar que se carguen las imagenes para luego evaluar
    // para ello hay una funcion 'waitFor' para hacer esta espera.
    await waitFor(
      () =>
        // en este callback le decimos que espera por el cambio de algo
        // utilizamos esta exprecion de jest
        expect(result.current.images.length).toBeGreaterThan(0), // q sea mayor a 0
      // { timeout: 1000 }, podemos tambien indicar el tiempo maximo que tiene q esperar..
    );

    // Luego hacemos las aserciones correspondientes
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
