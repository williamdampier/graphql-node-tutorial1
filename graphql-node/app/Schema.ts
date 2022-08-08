import { gql } from 'apollo-server-express';

const Schema = gql`
  type Person {
    id: ID!
    name: String
  }

  #handle user command
  type Query {
    getAllPeople: [Person] #will return multiple Person Instances
    getPerson(id: Int): Person #has an argument of 'id' of type Integer.
  }

  type Mutation {
    addPerson(name: String): Person
  }
`;

export default Schema;
