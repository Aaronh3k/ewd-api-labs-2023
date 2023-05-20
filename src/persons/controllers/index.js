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
        const { searchQuery, selectedGenreId, filter, page } = request.query;
        const persons = await personsService.searchPersons({ searchQuery, selectedGenreId, filter, page }, dependencies);
        return response.status(200).json(persons);
    };

    return {
        getPerson,
        find,
        searchPersons
    };
};
