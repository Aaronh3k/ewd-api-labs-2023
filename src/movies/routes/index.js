import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/:id')
        .get(accountsController.verify, moviesController.getMovie);

    router.route('/')
        .get(accountsController.verify, moviesController.find);
    
    router.route('/search')
        .get(accountsController.verify, moviesController.searchMovies);
    
    router.route('/:id/images')
        .get(accountsController.verify, moviesController.getMovieImages);

    router.route('/:id/reviews')
        .get(accountsController.verify, moviesController.getMovieReviews);
        
    router.route('/:id/credits')
        .get(accountsController.verify, moviesController.getMovieCredits);

    return router;
};
export default createMoviesRouter;
