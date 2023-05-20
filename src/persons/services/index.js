import axios from 'axios';

export default {
    getPerson: async (personId) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
    },
    find: async (query) => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&${query}`
        );
        return response.data;
    },
    searchPersons: async ({ searchQuery, page }) => {
        let endpoint = `https://api.themoviedb.org/3/search/person?query=${searchQuery}&page=${page}`;
        const response = await axios.get(
            `${endpoint}&api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
    },
    getPersonMovieCredits: async (personId) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.TMDB_KEY}`
        );
        return response.data.cast;
    },
    
    getPersonTVCredits: async (personId) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${process.env.TMDB_KEY}`
        );
        return response.data.cast;
    },
    getPersonDetails: async (personId) => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
      },
};
