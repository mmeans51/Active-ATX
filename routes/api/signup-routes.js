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
  .get(getAllSignup)
  .post(createSignup);

  router
  .route('/:id')
  .get(getSignupById)
  .put(updateSignup)
  .delete(deleteSignup);

module.exports = router;