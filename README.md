# REST API for ReactFlix - Movie Application (TMDB Movies Client)

This is the RESTful API backend for ReactFlix, a dynamic movie application designed to enhance your movie browsing experience.

## Features

This API integrates several key features that support the frontend functionalities:

+ **Movie Browsing**: Enables comprehensive movie browsing, supporting a grid layout, filtering, search functionality, favoriting, and detailed movie information. Also includes expandable movie images section.
+ **Movie Details**: Fetches comprehensive movie details including title, release date, runtime, rating, genres, cast details, images, and reviews. Genres are displayed as badges for easy identification.
+ **TV Shows**: Allows browsing of TV shows in a grid layout, fetching detailed info, cast, reviews, and images. Supports filtering and search functionality.
+ **Persons**: Supports a searchable and filterable grid of artists' information, fetching detailed info including bio, known-for details, and a list of their movie and TV show credits.
+ **Accounts**: Handles registration and management of user accounts. This includes user authentication, profile updates, and managing a user's favorites list.
+ **Trending**: Fetches trending movies, TV shows, and artists, with filtering options for media type and time window.

## Installation

Please follow these steps to install and run the project:

1. **Docker Desktop**: Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) on your machine. Ensure it is running.

2. **Dev Containers Extension**: Install the "Remote - Containers" extension in Visual Studio Code. This will allow you to open any folder inside a Docker container.

3. **Reopen in Container**: With the project open in Visual Studio Code, press `F1` to open the command palette and run the "Remote-Containers: Reopen in Container" command.

4. **Install Dependencies**: In the terminal at the project root level, install the required node modules using the command:
    ```bash
    npm install
    ```

5. **Start the Development Server**: Spin up the development server using the command:
    ```bash
    npm run dev
    ```
This will start the application, making it available for use.


## API Configuration

Create a `.env` file at the project root and update the variables as per your setup:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=YOUR_TMDB_API_KEY
DATABASE_DIALECT=mongo
DATABASE_URL=mongodb://127.0.0.1:27017/movies_db
JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY

## Security and Authentication

The ReactFlix API ensures security in the following ways:

1. **Password Encryption**: User passwords are encrypted using [Bcrypt](https://www.npmjs.com/package/bcrypt), a robust password hashing function designed to safeguard password security.

2. **JWT Token Authorization**: All routes (with the exception of `POST: /api/accounts`) are protected using JSON Web Token (JWT) authorization. A token is generated for each user based on their unique email address and a secret key, ensuring a secure and personalized user experience.

## Data Validation

Data input validation is an essential aspect of ensuring data integrity. ReactFlix API enforces data validation rules as follows:

1. **Account Model Validation**: Data input for the Account model in MongoDB is validated using Joi, a powerful data validation library for JavaScript. This ensures that the data stored in our database adheres to specific rules, enhancing the reliability of our API. You can view the validation implementation [here](https://github.com/matul3jan/ewd-api-labs-2023/blob/master/src/accounts/validators/index.js).


## Integration with React Application

The API can be readily integrated with any React frontend application. In this case, it is designed to work seamlessly with ReactFlix Front End React Project. You can check out the code [here](https://github.com/matul3jan/labMoviesApp).

Below is an example of how to call the API from a React application:

```javascript
export const getMovies = (page) => fetcher(`/api/movies/popular?page=${page}`)
    .then((res) => res.json())
    .then((json) => json);

## Logging

To ensure efficient debugging and error tracking, the ReactFlix API incorporates comprehensive logging. This is made possible with the help of a powerful third-party middleware service:

**Winston**: [Winston](https://github.com/winstonjs/winston) is a versatile logging library for Node.js. It is capable of logging events to multiple transports (destinations), which makes it a great choice for complex logging needs.

Winston allows us to record logs at various levels, such as `info`, `warn`, and `error`, thereby providing granular control over how we report the state of our application. This facilitates better understanding and quicker resolution of any issues that may arise.

## Frontend Repository

The ReactFlix API is designed to provide the backend support for a full-fledged movie application, and the frontend part of this application is hosted in a separate repository.

Frontend Repository: [ReactFlix Frontend](https://github.com/Aaronh3k/ReactFlix_Movie-App)

The frontend application makes use of this API for all data needs, including fetching movie details, managing user accounts, handling TV shows data, etc. Head over to the frontend repository for more details about its implementation and how to get it up and running.
