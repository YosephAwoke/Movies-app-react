const API_KEY = "a56cdf163db79fe0f4509b5a0fc512bb";
const BASE_URL = "https://api.themoviedb.org/3";
// const IMG_BASE_URL = "https://image.tmdb.org/t/p";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
