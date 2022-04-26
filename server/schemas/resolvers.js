const { User, Thought } = require('../models');

const resolvers = {
  Query: {
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
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
};

module.exports = resolvers;

// a resolver can accept 4 args in the ff order
// parent: This is if we used nested resolvers to handle more complicated actions, as it would hold the reference to the resolver that executed the nested resolver function
// args: This is an object of all of the values passed into a query or mutation request as parameters.  In our case, we destructure the username parameter out to be used.
// context:  This will come into play later. If we were to need the same data to be accessible by all resolvers, such as a logged-in user's status or API access token, this data will come through this context parameter as an object
// info: This will contain extra information about an operation's current state. This isn't used as frequently, but it can be implemented for more advanced uses.
