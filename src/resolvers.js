import personModel from "../models/person.js";
import userModel from "../models/user.js";

const resolvers = {
  Query: {
    persons: () => personModel.find({}),
    users: () => userModel.find({}),
    person: (root, { id }) => {
      return persons.find((person) => person.id === id);
    },
  },
  Mutation: {
    addPerson: (root, { name, lastname, age }) => {
      const person = new personModel({
        name: name,
        lastname: lastname,
        age: age,
      });
      return person.save();
    },
    addUser: (root, { name, address, birthday, posts }) => {
      const user = new userModel({
        name,
        address,
        birthday,
        posts,
      });
      return user.save();
    },
  },
};

export default resolvers;
