import personsService from "./../services";

export default (dependencies) => {

    const getPerson = async (request, response, next) => {
        const personId = request.params.id;
        const person = await personsService.getPerson(personId, dependencies);
        response.status(200).json(person);
    };
    const find = async (request, response, next) => {
        const query = request.query;
        const persons = await personsService.find(query, dependencies);
        response.status(200).json(persons);
    };
    const searchPersons = async (request, response, next) => {
        const { query, page = 1 } = request.query;
        const persons = await personsService.searchPersons(query, page, dependencies);
        return response.status(200).json(persons);
    };
    const getPersonMovieCredits = async (request, response, next) => {
        const personId = request.params.id;
        const credits = await personsService.getPersonMovieCredits(personId, dependencies);
        response.status(200).json(credits);
    };
    const getPersonTVCredits = async (request, response, next) => {
        const personId = request.params.id;
        const credits = await personsService.getPersonTVCredits(personId, dependencies);
        response.status(200).json(credits);
    };
    
    const getPersonDetails = async (request, response, next) => {
        const personId = request.params.id;
        const details = await personsService.getPersonDetails(personId, dependencies);
        response.status(200).json(details);
    };

    return {
        getPerson,
        find,
        searchPersons,
        getPersonMovieCredits,
        getPersonTVCredits,
        getPersonDetails
    };
};
