const { User, Thought } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },

    // get all thoughts
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },

    // get a single thought
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },

    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },

    // get a user by name
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
  },

  Mutation: {
    // add user mutation
    addUser: async (parent, args) => {
      const user = await User.create(args);

      const token = signToken(user);

      return { token, user };
    },

    // log-in mutation
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true }
        );

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    addReaction: async (parent, { thoughtId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $push: {
              reactions: { reactionBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    addFriend: async (parent, { friendId }, context) => {

      if(context.user) {
        
        const updatedUser = await User.findOneAndUpdate(

          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }

        ).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

// a resolver can accept 4 args in the ff order
// parent: This is if we used nested resolvers to handle more complicated actions, as it would hold the reference to the resolver that executed the nested resolver function
// args: This is an object of all of the values passed into a query or mutation request as parameters.  In our case, we destructure the username parameter out to be used.
// context:  This will come into play later. If we were to need the same data to be accessible by all resolvers, such as a logged-in user's status or API access token, this data will come through this context parameter as an object
// info: This will contain extra information about an operation's current state. This isn't used as frequently, but it can be implemented for more advanced uses.
