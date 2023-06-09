import express from 'express';
import TVShowsController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createTVShowsRouter = (dependencies) => {
    const router = express.Router();
    const tvShowsController = TVShowsController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/')
        .get(accountsController.verify, tvShowsController.find);
    
    router.route('/popular')
        .get(accountsController.verify, tvShowsController.getPopular);

    router.route('/airing_today')
        .get(accountsController.verify, tvShowsController.getAiringToday);

    router.route('/on_the_air')
        .get(accountsController.verify, tvShowsController.getOnTheAir);

    router.route('/top_rated')
        .get(accountsController.verify, tvShowsController.getTopRated);
    
    router.route('/search')
        .get(accountsController.verify, tvShowsController.searchTVShows);
    
    router.route('/:id')
        .get(accountsController.verify, tvShowsController.getTVShow);
    
    router.route('/:id/credits')
        .get(accountsController.verify, tvShowsController.getTVShowCredits);
      
    router.route('/:id/details')
        .get(accountsController.verify, tvShowsController.getTVShowDetails);
      
    router.route('/:id/reviews')
        .get(accountsController.verify, tvShowsController.getTVShowReviews);
      
    router.route('/:id/images')
        .get(accountsController.verify, tvShowsController.getTVShowImages);

    return router;
};

export default createTVShowsRouter;
