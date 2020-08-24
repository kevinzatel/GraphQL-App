import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    persons: [Person]
    person(id: String): Person
    users: [User]
  }
  type Person {
    id: String
    name: String
    lastname: String
    age: Int
  }
  type User {
    id: String
    name: String
    address: String
    birthday: String
    posts: [Post]
  }
  type Post {
    id: String
    title: String
    content: String
    comments: [String]
  }
  input InputPost {
    id: String
    title: String
    content: String
    comments: [String]
  }
  type Mutation {
    addPerson(name: String!, lastname: String!, age: Int!): Person
    addUser(
      name: String!
      address: String!
      birthday: String!
      posts: [InputPost]
    ): User
  }
`;

export default typeDefs;
