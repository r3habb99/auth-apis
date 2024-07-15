const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller');
const {
  signupValidation,
  loginValidation,
} = require('../validations/auth.validation');
const authenticate = require('../middlewares/auth.middleware');
const { validate } = require('express-validation');

const router = express.Router();

router.post('/signup', signup);
router.post('/login',  login);
router.post('/logout', authenticate, logout);

module.exports = router;
