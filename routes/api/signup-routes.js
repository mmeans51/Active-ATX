const router = require('express').Router();
const {
    getAllSignup,
    getSignupById,
    createSignup,
    updateSignup,
    deleteSignup
} = require('../../controllers/signup-controller');

router
  .route('/')
  .get()
  .post();

  router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;