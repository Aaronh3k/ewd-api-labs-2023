import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController';

const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    const validationController = ValidationController(dependencies);
    
    router.route('/')
        .post(validationController.validateAccount,accountsController.createAccount);

    router.route('/')
        .get(accountsController.verify, accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.verify,accountsController.getAccount);
    
    router.route('/:id')
        .put(accountsController.verify, accountsController.updateAccount);
    
    router.route('/security/token')
        .post(accountsController.authenticateAccount);
    
    router.route('/:id/favourites')
        .post(accountsController.verify, accountsController.addFavourite);
    
    router.route('/:id/favourites')
        .get(accountsController.verify, accountsController.getFavourites);
    
    router.route('/:id/favourites')
        .delete(accountsController.verify, accountsController.removeFavourite);
      
    return router;
};
export default createRouter;