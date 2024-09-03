import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [stateData, setStateData] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setStateData({
      ...stateData,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setStateData({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  // recordar q se ejecuta cuando haya un cambio en la url
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: stateData.data,
    isLoading: stateData.isLoading,
    hasError: stateData.hasError,
  };
};
