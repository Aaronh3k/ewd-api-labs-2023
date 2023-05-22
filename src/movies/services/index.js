import axios from 'axios';

export default {
  getMovie: async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  find: async (query, page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },
  getPopular: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  getUpComing: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  getTopRated: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  getNowPlaying: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  searchMovies: async (query, page = 1) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${process.env.TMDB_KEY}`
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