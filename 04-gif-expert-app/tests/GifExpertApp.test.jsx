import { render, screen } from '@testing-library/react';
import { GifExpertApp } from './../src/GifExpertApp.jsx';

describe('Prueba del componente GifExpertApp', () => {
  test('should ', () => {
    render(<GifExpertApp />);
    // obtengo el form del formulario
    // para ello tuvimos que agregar arial-label
    // para que no generer error y que react pueda saber q ocupamos este label
    const form = screen.getByRole('form');

    screen.debug();
  });
});
