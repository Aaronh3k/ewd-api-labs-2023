import express from 'express';
import TVShowsController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createTVShowsRouter = (dependencies) => {
    const router = express.Router();
    const tvShowsController = TVShowsController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/:id')
        .get(accountsController.verify, tvShowsController.getTVShow);

    router.route('/')
        .get(accountsController.verify, tvShowsController.find);
    
    router.route('/search')
        .get(accountsController.verify, tvShowsController.searchTVShows);

    return router;
};

export default createTVShowsRouter;
