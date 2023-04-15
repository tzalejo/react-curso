import { useEffect, useState } from 'react';
import { getGifGrid } from '../Helpers/getGifs';

export const useFetchGifs = (category) => {
  // mis use states
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    setImages(await getGifGrid(category));
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []); // [] le indicamos que este hoot se dispare por primera vez.

  return {
    images,
    isLoading,
  };
};
