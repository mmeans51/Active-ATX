const { Schema, model } = require('mongoose');

const SignupSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    },
    phone: {
        type: String
    },
    shirtSize: {
        type: Array
    },
    skillLevel: {
        type: Array
    },
    position: {
        type: Array
    }
});

const Signup = model('Signup', SignupSchema);

module.exports = Signup;