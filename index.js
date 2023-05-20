import dotenv from 'dotenv';
import express from 'express';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from './src/movies/routes';
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';
import cors from 'cors';
import createTVShowsRouter from './src/tvshows/routes';

dotenv.config();

db.init();

const app = express();

// Enable CORS
app.use(cors());

// Middleware for parsing the body of the request.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

const dependencies = buildDependencies();

app.use('/api/movies', createMoviesRouter(dependencies));

app.use('/api/accounts', createAccountsRouter(dependencies));

app.use('/api/tv', createTVShowsRouter(dependencies));

app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});