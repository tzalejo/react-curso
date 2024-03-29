import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba del componente GifItem', () => {
  const title = 'Saitama';
  const url = 'https://one-punch/saitama.jpg';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    // busco la url y comparo con la q tengo en la variable
    expect(screen.getByRole('img').src).toBe(url);
    expect(screen.getByRole('img').alt).toBe(title);
    // son lo mismo..
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
