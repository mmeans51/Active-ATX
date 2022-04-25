const { User } = require('../models/index')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    // QUERY
  Query: {
    me: async(parent, args, context) => {
        // check for the existence of context.user. If no context.user property exists, then we know that the user isn't authenticated and we can throw an AuthenticationError.
        if(context.user) {
        const userData = await User.findOne({})
        .select('-__v -password')

        return userData;
        }

        throw new AuthenticationError('Not logged in');
    },

    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
    },

    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
  },

  // MUTATIONS
  Mutation: {
    addUser: async (parent, args) => {
      // Mongoose User model creates a new user in the database with whatever is passed in as the args
      const user = await User.create(args);
      //  sign a token and return an object that combines the token with the user's data
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
        
        const user = await User.findOne({ email });

        if(!user) {
            throw new AuthenticationError('Incorrect credentials')
        }

        const correctPw = await user.isCorrectPassword(password);

        if(!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
        }
        const token = signToken(user);
        return { token, user };
    },
  },
};

module.exports = resolvers;

// a resolver can accept 4 args in the ff order
// parent: This is if we used nested resolvers to handle more complicated actions, as it would hold the reference to the resolver that executed the nested resolver function
// args: This is an object of all of the values passed into a query or mutation request as parameters.  In our case, we destructure the username parameter out to be used.
// context:  This will come into play later. If we were to need the same data to be accessible by all resolvers, such as a logged-in user's status or API access token, this data will come through this context parameter as an object
// info: This will contain extra information about an operation's current state. This isn't used as frequently, but it can be implemented for more advanced uses.
