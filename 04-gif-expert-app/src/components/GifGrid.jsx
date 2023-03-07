import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading} = useFetchGifs(category);
  // const apiKey = '4ydUL7SdFZPIAh84Xj4yJVTAmLfMn0Kf';
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>) // para que el h2 no exista en el page.
      }
      <div className="card-grid">
      {
        images.map((image) => (
          // {/* <li key={image.id.id}>{image.title}</li> */}
          <GifItem
            key={image.id.id}
            {...image} // aca enviamos todo los valores de image..
            // title={image.title}
            // url={image.url}
          />
        ))
      }

      </div>
    </>
  );
};
