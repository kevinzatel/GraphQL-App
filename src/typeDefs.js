import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    persons: [Person],
    person(id: String): Person
  },
  type Person{
    id: String,
    name: String,
    lastname: String,
    age: Int
  },
  type Mutation{
    addPerson(name: String!, lastname: String!, age: Int!): Person
  }
`;

export default typeDefs;