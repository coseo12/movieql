import { fetchMovies } from '../api/index.js';

export const getMovies = async (limit, rating) => {
  try {
    let query = '';
    if (limit !== undefined && limit > 0) {
      query += `?limit=${limit}`;
    }
    if (rating !== undefined && rating > 0) {
      query += `&minimum_rating=${rating}`;
    }
    const { data } = await fetchMovies(query);
    return data.data.movies;
  } catch (err) {
    console.log(err);
  }
};
