import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Dragon Ball");

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories((cat) => [inputValue, ...cat]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
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
