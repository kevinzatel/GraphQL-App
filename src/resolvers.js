import personModel from '../models/person.js'

const resolvers = {
    Query: {
        persons: () => personModel.find({}),
        person: (root, { id }) => {
            return persons.find(person => person.id === id);
        }
    },
    Mutation: {
        addPerson: (root, { name, lastname, age }) => {
            const person = new personModel({
                name: name,
                lastname: lastname,
                age: age
            });
            return person.save();
        }
    }
};

export default resolvers;