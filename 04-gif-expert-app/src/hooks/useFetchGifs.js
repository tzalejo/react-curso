import { useEffect, useState } from 'react';
import {getGifGrid} from '../Helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let prueba222 = 0;
    const getImages = async () => {
      setImages(await getGifGrid(category));
      setIsLoading(false);
    };

    useEffect(() => {
      prueba222 = 3;
      getImages();
    }, []); // [] le indicamos que este hoot se dispare por primera vez.

    prueba222 = 5;
    return {
        images,
        isLoading
    };

}
