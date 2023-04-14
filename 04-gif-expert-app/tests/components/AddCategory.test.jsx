import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test AddCategory', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    // llamo al componente
    render(<AddCategory onNewCategory={() => {}} />);

    // obtengo el input del formulario
    const input = screen.getByRole('textbox');

    // setInputValue(e.target.value);
    // para disparar eventos utilizamos fireEvent
    fireEvent.input(input, { target: { value: 'dragon ball' } }); //vemos en el compoennte q evento disparar,

    // verificamos el valor del input coincide con el string que insertamos
    expect(input.value).toBe('dragon ball');

    // screen.debug(); // para ver lo que hay en el screm
  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'dragon ball';

    // jest.fn es una funcion tipo mock,seria una simulacion, es decir
    // no es la implementacion real de la funcion
    // sino que es una simulacion de esa funcion.
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox'); // obtengo el input que esta dentro del formulario

    // obtengo el form del formulario
    // para ello tuvimos que agregar arial-label
    // para que no generer error y que react pueda saber q ocupamos este label
    const form = screen.getByRole('form');

    //vemos en el compoennte q evento disparar,
    //disparamos el primer evento del formulario , para establacer el valor
    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form); // indicamos que queremos sumitiar

    expect(input.value).toBe(''); // aca estoy verificando que seteo de setInputValue sea ''

    expect(onNewCategory).toHaveReturnedTimes(1); // verifico que se llamada solo una vez
    expect(onNewCategory).toHaveBeenCalled(); // verifico que la fc haya sido llamada.
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); // verifico que el valor ingresado sea el mismo
  });

  test('no debe de llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0); // que fue llamado 0 veces..
    expect(onNewCategory).not.toHaveBeenCalled(); // que no fue llamado.
  });
});
