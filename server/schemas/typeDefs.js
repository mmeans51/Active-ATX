const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String! 
    email: String
    teamname: Int
  }

  type Team {
    teamName: String!
    teamId: ID!
    
  }

  type Auth {
    token: ID!
    user: User
  }

  input TeamInput {
    teamId: ID!
    teamName: String!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTeam(teamName: String!): Team
   
  }
`;

module.exports = typeDefs;
