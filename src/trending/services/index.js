import axios from 'axios';

export default {
    getTrending: async (mediaType, timeWindow) => {
        const response = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${process.env.TMDB_KEY}`
        );
        return response.data;
    },
};
