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
  searchTVShows: async ({ searchQuery, selectedGenreId, filter, page }) => {
    let endpoint = 'https://api.themoviedb.org/3/discover/tv';
    if (searchQuery) {
      endpoint = `https://api.themoviedb.org/3/search/tv?query=${searchQuery}&page=${page}`;
    } else if (selectedGenreId) {
      endpoint += `?with_genres=${selectedGenreId}&sort_by=${filter}&page=${page}`;
    } else {
      endpoint += `?sort_by=${filter}&page=${page}`;
    }
    
    const response = await axios.get(
      `${endpoint}&api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false`
    );
    return response.data;
  },
};