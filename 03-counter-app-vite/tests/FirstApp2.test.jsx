import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Prueba en <FirstApp>', () => {
  const title = 'Hola, soy Goku';
  const subTitle = 8;
  test('Debe de ahcer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola,  soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('debe de mostrart el titulo en un h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      title,
    );
  });

  test('Debe de mostart el subtitulo enviado por props', () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    // console.log(screen.getAllByText(subTitle));
    // expect(screen.getAllByText(subTitle).lenght).toBe(1);
  });
});
