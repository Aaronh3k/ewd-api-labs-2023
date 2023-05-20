import express from 'express';
import PersonsController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createPersonsRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const personsController = PersonsController(dependencies);
    const accountsController = AccountsController(dependencies);

    router.route('/:id')
        .get(accountsController.verify, personsController.getPerson);

    router.route('/')
        .get(accountsController.verify, personsController.find);

    router.route('/search')
        .get(accountsController.verify, personsController.searchPersons);

    return router;
};
export default createPersonsRouter;