import { useEffect } from "react";
import { getGifGrid } from "./../Helpers/getGifs";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifGrid(category);
  }, []); // [] le indicamos que este hoot se dispare por primera vez.

  // const apiKey = '4ydUL7SdFZPIAh84Xyj4JVTAmLfMn0Kf';
  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
};
