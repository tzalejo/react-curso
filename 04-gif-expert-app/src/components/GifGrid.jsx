import { useEffect, useState } from "react";
import { getGifGrid } from "./../Helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async (category) => {
    setImages(await getGifGrid(category));
  };

  useEffect(() => {
    getImages(category);
  }, []); // [] le indicamos que este hoot se dispare por primera vez.

  // const apiKey = '4ydUL7SdFZPIAh84Xyj4JVTAmLfMn0Kf';
  return (
    <>
      <h3>{category}</h3>
      {images.map((image) => (
        // {/* <li key={image.id.id}>{image.title}</li> */}
        <GifItem
          key={image.id.id}
          {...image} // aca enviamos todo los valores de image..
          // title={image.title}
          // url={image.url}
        />
      ))}
    </>
  );
};
