const { Signup } = require('../models/Signup')

const signupController = {
    getAllSignup(req, res) {
        Signup.find({})
        .then(dbSignupData => res.json(dbSignupData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    getSignupById({ params }, res) {
        Signup.findOne({ _id: params.id })
        .then(dbSignupData => {
            if (!dbSignupData) {
                res.status(404).json({ message: 'No signup found with this id!' });
                return;
            }
            res.json(dbSignupData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    }

module.exports = signupController;