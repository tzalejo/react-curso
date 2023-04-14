import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    // console.log(e.target.value);
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((cat) => [inputValue, ...cat]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        // onChange={(e) => onInputChange(e)} es similar ya q enviamos event por defecto
        onChange={onInputChange}
      />
    </form>
  );
};

// Validar que sea requerido el onNewCategory
AddCategory.protoTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
