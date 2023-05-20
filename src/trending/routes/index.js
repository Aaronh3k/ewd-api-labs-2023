import express from 'express';
import TrendingController from '../controllers';

const createTrendingRouter = (dependencies) => {
    const router = express.Router();
    const trendingController = TrendingController(dependencies);

    router.route('/:mediaType/:timeWindow')
        .get(trendingController.getTrending);

    return router;
};

export default createTrendingRouter;