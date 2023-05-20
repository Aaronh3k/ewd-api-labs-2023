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

    return router;
};
export default createMoviesRouter;
