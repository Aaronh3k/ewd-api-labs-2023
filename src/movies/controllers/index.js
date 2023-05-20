import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        //input
        const movieId = request.params.id;
        // Treatment
        const movie = await moviesService.getMovie(movieId, dependencies);
        //output
        response.status(200).json(movie);
    };
    const find = async (request, response, next) => {
        //input
        const query = request.query;
        // Treatment
        const movies = await moviesService.find(query, dependencies);
        //output
        response.status(200).json(movies);
    };
    const searchMovies = async (request, response, next) => {
        //input
        const { searchQuery, selectedGenreId, filter, page } = request.query;
        // Treatment
        const movies = await moviesService.searchMovies({ searchQuery, selectedGenreId, filter, page }, dependencies);
        //output
        return response.status(200).json(movies);
      };

    return {
        getMovie,
        find,
        searchMovies
    };
};
