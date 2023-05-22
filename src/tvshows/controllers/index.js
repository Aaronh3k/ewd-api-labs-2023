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
    const getPopular = async (request, response, next) => {
      const { page = 1 } = request.query;
      const tvShow = await tvShowsService.getPopular(page, dependencies);
      response.status(200).json(tvShow);
  };
    const getAiringToday = async (request, response, next) => {
      const { page = 1 } = request.query;
      const tvShow = await tvShowsService.getAiringToday(page, dependencies);
      response.status(200).json(tvShow);
  };
    const getOnTheAir = async (request, response, next) => {
      const { page = 1 } = request.query;
      const tvShow = await tvShowsService.getOnTheAir(page, dependencies);
      response.status(200).json(tvShow);
  };
    const getTopRated = async (request, response, next) => {
      const { page = 1 } = request.query;
      const tvShow = await tvShowsService.getTopRated(page, dependencies);
      response.status(200).json(tvShow);
  };
    const searchTVShows = async (request, response, next) => {
      const { query, page = 1 } = request.query;
        const tvShows = await tvShowsService.searchTVShows(query, page, dependencies);
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
        getTVShowImages,
        getAiringToday,
        getOnTheAir,
        getPopular,
        getTopRated
    };
};