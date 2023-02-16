import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addCategory = (newCategory) => {
    // valido si existe la nueva categoria.
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Nuevo elemento"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

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
