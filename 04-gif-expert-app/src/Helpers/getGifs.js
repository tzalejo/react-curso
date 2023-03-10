export const getGifGrid = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=4ydUL7SdFZPIAh84Xyj4JVTAmLfMn0Kf&q=${category}&limit=15`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
