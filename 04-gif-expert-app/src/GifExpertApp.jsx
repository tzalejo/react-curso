import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ({ second }) => {
  const [first, setfirst] = useState(second);
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    // valido si existe la nueva categoria.
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Nuevo elemento"]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        // setCategories= {setCategories}
        onNewCategory={(value) => addCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* gif items */}
    </>
  );
};
