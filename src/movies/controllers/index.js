import moviesService from "./../services";

export default (dependencies) => {

    const getMovie = async (request, response, next) => {
        const movieId = request.params.id;
        const movie = await moviesService.getMovie(movieId, dependencies);
        response.status(200).json(movie);
    };
    const find = async (request, response, next) => {
        const { query, page = 1 } = request.query;
        const movies = await moviesService.find(query, page, dependencies);
        response.status(200).json(movies);
    };
    const getPopular = async (request, response, next) => {
        const { page = 1 } = request.query;
        const movies = await moviesService.getPopular(page, dependencies);
        response.status(200).json(movies);
    };
    const getNowPlaying = async (request, response, next) => {
        const { page = 1 } = request.query;
        const movies = await moviesService.getNowPlaying(page, dependencies);
        response.status(200).json(movies);
    };
    const getTopRated = async (request, response, next) => {
        const { page = 1 } = request.query;
        const movies = await moviesService.getTopRated(page, dependencies);
        response.status(200).json(movies);
    };
    const getUpComing = async (request, response, next) => {
        const { page = 1 } = request.query;
        const movies = await moviesService.getUpComing(page, dependencies);
        response.status(200).json(movies);
    };
    const searchMovies = async (request, response, next) => {
        const { query, page = 1 } = request.query;
        const movies = await moviesService.searchMovies(query, page, dependencies);
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
        getMovieCredits,
        getPopular,
        getNowPlaying,
        getUpComing,
        getTopRated
    };
};
