import trendingService from "./../services";

export default (dependencies) => {
    const getTrending = async (request, response, next) => {
        const mediaType = request.params.mediaType;
        const timeWindow = request.params.timeWindow;
        const trendingData = await trendingService.getTrending(mediaType, timeWindow, dependencies);
        response.status(200).json(trendingData);
    };

    return {
        getTrending
    };
};