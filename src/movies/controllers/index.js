import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        const movieId = request.params.id;
        const movie = await moviesService.getMovie(movieId, dependencies);
        response.status(200).json(movie);
    };
    const find = async (request, response, next) => {
        const query = request.query;
        const movies = await moviesService.find(query, dependencies);
        response.status(200).json(movies);
    };
    const searchMovies = async (request, response, next) => {
        const { searchQuery, selectedGenreId, filter, page } = request.query;
        const movies = await moviesService.searchMovies({ searchQuery, selectedGenreId, filter, page }, dependencies);
        return response.status(200).json(movies);
      };
    const getMovieImages = async (request, response, next) => {
        const movieId = request.params.id;
        const images = await moviesService.getMovieImages(movieId, dependencies);
        response.status(200).json(images);
    };

    const getMovieReviews = async (request, response, next) => {
        const movieId = request.params.id;
        const reviews = await moviesService.getMovieReviews(movieId, dependencies);
        response.status(200).json(reviews);
    };

    const getMovieCredits = async (request, response, next) => {
        const movieId = request.params.id;
        const credits = await moviesService.getMovieCredits(movieId, dependencies);
        response.status(200).json(credits);
    };

    return {
        getMovie,
        find,
        searchMovies,
        getMovieImages,
        getMovieReviews,
        getMovieCredits
    };
};
