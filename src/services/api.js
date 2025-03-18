const API_KEY = "72a1f096147345783cf9232eec45ac8d";
const BASE_URL = "https://api.themoviedb.org/3";
// we will be using two functions one for getting popular movies to populate our home page and 2nd for searching movies
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
