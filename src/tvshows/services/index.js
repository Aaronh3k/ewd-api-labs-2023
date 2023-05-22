import axios from 'axios';

export default {
  getTVShow: async (tvShowId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  find: async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&${query}`
    );
    return response.data;
  },
  getPopular: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  getTopRated: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  getAiringToday: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  getOnTheAir: async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.TMDB_KEY}&page=${page}&language=en-US&include_adult=false&include_video=false&`
    );
    return response.data;
  },
  searchTVShows: async (query, page = 1) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?query=${query}&page=${page}&api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getTVShowCredits: async (tvShowId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvShowId}/credits?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getTVShowDetails: async (tvShowId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getTVShowReviews: async (tvShowId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvShowId}/reviews?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  },
  getTVShowImages: async (tvShowId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvShowId}/images?api_key=${process.env.TMDB_KEY}`
    );
    return response.data;
  }
};