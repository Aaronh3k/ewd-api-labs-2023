import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/')
        .get(accountsController.verify, moviesController.find);
    
    router.route('/popular')
        .get(accountsController.verify, moviesController.getPopular);
    
    router.route('/now_playing')
        .get(accountsController.verify, moviesController.getNowPlaying);
    
    router.route('/top_rated')
        .get(accountsController.verify, moviesController.getTopRated);
    
    router.route('/upcoming')
        .get(accountsController.verify, moviesController.getUpComing);
    
    router.route('/search')
        .get(accountsController.verify, moviesController.searchMovies);
    
    router.route('/:id')
        .get(accountsController.verify, moviesController.getMovie);
    
    router.route('/:id/images')
        .get(accountsController.verify, moviesController.getMovieImages);

    router.route('/:id/reviews')
        .get(accountsController.verify, moviesController.getMovieReviews);
        
    router.route('/:id/credits')
        .get(accountsController.verify, moviesController.getMovieCredits);

    return router;
};
export default createMoviesRouter;
