import axios from 'axios';

export default {
  getMovie: async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  find: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },
  searchMovies: async ({ searchQuery, selectedGenreId, filter, page }) => {
    let endpoint = 'https://api.themoviedb.org/3/discover/movie';
    if (searchQuery) {
      endpoint = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&page=${page}`;
    } else if (selectedGenreId) {
      endpoint += `?with_genres=${selectedGenreId}&sort_by=${filter}&page=${page}`;
    } else {
      endpoint += `?filter=${filter}&page=${page}`;
    }
    
    const response = await axios.get(
      `${endpoint}&api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false`
    );
    return response.data;
  },
  getMovieImages: async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getMovieReviews: async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getMovieCredits: async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
};