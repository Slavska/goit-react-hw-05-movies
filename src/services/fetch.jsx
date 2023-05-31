import axios from 'axios';

const API_KEY = 'e9d3be710fcd0188a22690b3d1ecf700';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrends = async () => {
  const items = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return items.data;
};

export const searchMovies = async input => {
  const items = await axios.get(
    `${BASE_URL}/search/movie?query=${input}&api_key=${API_KEY}`
  );
  return items.data;
};
export async function getDetails(id) {
  const items = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return items.data;
}
export async function getCredits(id) {
  const items = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return items.data;
}
export async function getReviews(id) {
  const items = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return items.data;
}
