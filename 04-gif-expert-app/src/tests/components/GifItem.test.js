import { render } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Prueba del componente GifItem', () => {
  const title = 'Saitama';
  const url = 'https://one-punch';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
