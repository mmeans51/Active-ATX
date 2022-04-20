const { Schema } = require('mongoose');
const userSchema = require('./User');

const teamSchema = new Schema({
  teamname: {
    type: String,
    required: true,
    unique: true,
  },
  teamId: {
      type: String,
      required: true,
  },

  players: {
    type: String,
    required: true,
    playernames: [userSchema]
  },
  
});

module.exports = teamSchema;
