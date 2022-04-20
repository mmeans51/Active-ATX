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


  
});

module.exports = teamSchema;
