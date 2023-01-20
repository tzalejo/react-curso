import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en <FirstApp>', () => {
  test('Debe de hace match con el snapshot', () => {
    const title = 'Hola, Soy Vegeta';
    render(<FirstApp title={title} />);
  });
});
