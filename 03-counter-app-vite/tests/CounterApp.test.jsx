import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Prueba del CounterApp', () => {
  const initialValue = 10;
  test('Debe de match con el snapshot de CounterApp', () => {
    const container = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor de inicio de 1oo', () => {
    render(<CounterApp value={30} />);

    expect(screen.getByText(30)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('30');
  });

  test('Debe de incrementar en +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('Mi Boton +1'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('Debe de decrementar en -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('Mi Boton -1'));
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('Debe de funcionar el boton de reset', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('Mi Boton +1'));
    fireEvent.click(screen.getByText('Mi Boton +1'));
    fireEvent.click(screen.getByText('Mi Boton +1'));

    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
