const { AuthenticationError } = require('apollo-server-express');
const { Player } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.Player) {
        const PlayerData = await Player.findOne({ _id: context.Player._id })
          .select('-__v -password')
          

        return PlayerData;
      }

      throw new AuthenticationError('Not logged in');
    },
    Players: async () => {
      return Player.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends');
    },
    Player: async (parent, { Playername }) => {
      return Player.findOne({ Playername })
        .select('-__v -password')
    
    },
    
  },

  Mutation: {
    addPlayer: async (parent, args) => {
      const Player = await Player.create(args);
      const token = signToken(Player);

      return { token, Player };
    },
    login: async (parent, { email, password }) => {
      const Player = await Player.findOne({ email });

      if (!Player) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await Player.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(Player);
      return { token, Player };
    },
   
  }
};

module.exports = resolvers;
