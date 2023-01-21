import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en <FirstApp>', () => {
  test('Debe de hace match con el snapshot', () => {
    const title = 'Hola, Soy Vegeta';
    // container es proporcionada por @testing-library/react
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el titulo en un h1', () => {
    const title = 'Hola, Soy Vegeta';
    const { container, getByText } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);
  });
});
