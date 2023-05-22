import accountService from "../services";
import logger from '../../utils/logger';

export default (dependencies) => {
    const createAccount = async (request, response, next) => {
        const { firstName, lastName, email, password } = request.body;
        const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);
        response.status(201).json(account)
    };
    const getAccount = async (request, response, next) => {
        const accountId = request.params.id;
        const account = await accountService.getAccount(accountId, dependencies);
        response.status(200).json(account);
    };
    const listAccounts = async (request, response, next) => {
        const accounts = await accountService.find(dependencies);
        response.status(200).json(accounts);
    };
    const updateAccount = async (request, response, next) => {
        const { firstName, lastName, username, websiteUrl } = request.body;
        const accountId = request.params.id;
        const account = await accountService.updateAccount(accountId, firstName, lastName, username, websiteUrl, dependencies);
        response.status(200).json(account);
    };
    const authenticateAccount = async (request, response, next) => {
        try {
            const { email, password } = request.body;
            const { token, account } = await accountService.authenticate(email, password, dependencies);
            response.status(200).json({ token: `BEARER ${token}`, user_id: account.id, email: account.email });
        } catch (error) {
            logger.error(error);
            response.status(401).json({ message: 'Unauthorised' });
        }
    };
    const addFavourite = async (request, response, next) => {
        try {
            const { movieId } = request.body;
            const id = request.params.id;
            const account = await accountService.addFavourite(id, movieId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            logger.error(`Invalid Data ${err.message}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavourites = async (request, response, next) => {
        try {
            const id = request.params.id;
            const favourites = await accountService.getFavourites(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            logger.error(`Invalid Data ${err.message}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const removeFavourite = async (request, response, next) => {
        try {
            const { movieId } = request.body;
            const id = request.params.id;
            const account = await accountService.removeFavourite(id, movieId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            logger.error(`Invalid Data ${err.message}`);
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const verify = async (request, response, next) => {
        try {
            const authHeader = request.headers.authorization;
            if (!authHeader) {
                throw new Error('Authorization header is missing');
            }
            const accessToken = authHeader.split(" ")[1];
            const user = await accountService.verifyToken(accessToken, dependencies);
            next();
        } catch(err) {
            next(new Error(`Verification Failed ${err.message}`));
        }
    };
    return {
        createAccount,
        getAccount,
        listAccounts,
        updateAccount,
        authenticateAccount,
        addFavourite,
        getFavourites,
        removeFavourite,
        verify
    };
};