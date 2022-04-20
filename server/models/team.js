const { Schema } = require('mongoose');

const teamSchema = new Schema({
  teamname: {

  },
  description: {
    type: String,
    required: true,
  },
  
});

module.exports = teamSchema;
