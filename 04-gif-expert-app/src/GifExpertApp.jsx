import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const addCategory = () => {
    setCategories(["Nueva Categoria", ...categories]);
    // setCategories((cat) => [...cat, "Nuevo elemento"]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

      {/* <button onClick={addCategory}>Add Category</button> */}

      {/* listado de gif */}
      <ol>
        {categories.map((category) => (
          <li key={category}> {category} </li>
        ))}
      </ol>
      {/* gif items */}
    </>
  );
};
