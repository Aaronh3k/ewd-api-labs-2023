import tvShowsService from "./../services";

export default (dependencies) => {
    const getTVShow = async (request, response, next) => {
        const tvShowId = request.params.id;
        const tvShow = await tvShowsService.getTVShow(tvShowId, dependencies);
        response.status(200).json(tvShow);
    };
    const find = async (request, response, next) => {
        const query = request.query;
        const tvShows = await tvShowsService.find(query, dependencies);
        response.status(200).json(tvShows);
    };
    const searchTVShows = async (request, response, next) => {
        const { searchQuery, selectedGenreId, filter, page } = request.query;
        const tvShows = await tvShowsService.searchTVShows({ searchQuery, selectedGenreId, filter, page }, dependencies);
        return response.status(200).json(tvShows);
    };
    const getTVShowCredits = async (request, response, next) => {
        const tvShowId = request.params.id;
        const credits = await tvShowsService.getTVShowCredits(tvShowId, dependencies);
        response.status(200).json(credits);
      };
    const getTVShowDetails = async (request, response, next) => {
        const tvShowId = request.params.id;
        const details = await tvShowsService.getTVShowDetails(tvShowId, dependencies);
        response.status(200).json(details);
      };
    const getTVShowReviews = async (request, response, next) => {
        const tvShowId = request.params.id;
        const reviews = await tvShowsService.getTVShowReviews(tvShowId, dependencies);
        response.status(200).json(reviews);
      };  
    const getTVShowImages = async (request, response, next) => {
        const tvShowId = request.params.id;
        const images = await tvShowsService.getTVShowImages(tvShowId, dependencies);
        response.status(200).json(images);
      };

    return {
        getTVShow,
        find,
        searchTVShows,
        getTVShowCredits,
        getTVShowDetails,
        getTVShowReviews,
        getTVShowImages
    };
};