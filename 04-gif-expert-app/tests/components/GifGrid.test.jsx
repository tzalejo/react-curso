import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// como hacer un mock de un use hooks
// esto le decimos al mock que "emule" el funcionamiento del hooks
jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba en GifGrid', () => {
  const category = 'Dragon Ball';

  test('debe de mostrar el loading incialmente', () => {
    // cuadno hacemos el mock, tenemos que decir
    // con que informacion que va a simular que va
    // a devolver el mock
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

    // screen.debug();
  });

  test('should debe de mostrar items cuando se cargan las imagenes useFetchGif', () => {
    const gifs = [
      { id: { id: '123' }, title: 'Goku', url: 'https://xx.goku.jpg' },
      { id: { id: '456' }, title: 'Saitama', url: 'https://xx.saitama.jpg' },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
