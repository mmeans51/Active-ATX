const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Player {
    _id: ID
    Playername: String
    email: String
  }

  type Auth {
    token: ID!
    Player: Player
  }

  type Query {
    me: Player
    Players: [Player]
    Player(Playername: String!): Player
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addPlayer(Playername: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;