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

    return {
        getTVShow,
        find,
        searchTVShows
    };
};