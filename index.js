import dotenv from 'dotenv';
import express from 'express';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from './src/movies/routes';
import db from './src/config/db';

dotenv.config();

db.init();

const app = express();

// Middleware for parsing the body of the request.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

const dependencies = buildDependencies();

app.use('/api/movies', createMoviesRouter(dependencies));

app.use('/api/accounts', createAccountsRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});