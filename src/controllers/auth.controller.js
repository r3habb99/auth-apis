const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Token } = require('../models');
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require('../utils/response.utils');

const signup = async (req, res) => {
  try {
    const { firstName, lastName,username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    sendSuccessResponse(res, 201, 'User created successfully', { user });
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return sendErrorResponse(
        res,
        401,
        new Error('Invalid email or password')
      );
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    await Token.create({
      token,
      userId: user.id,
      expiresAt: new Date(Date.now() + 3600 * 1000),
    });

    sendSuccessResponse(res, 200, 'Login successful', { token });
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};

const logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    await Token.destroy({ where: { token } });

    sendSuccessResponse(res, 200, 'Logout successful');
  } catch (error) {
    sendErrorResponse(res, 500, error);
  }
};

module.exports = {
  signup,
  login,
  logout,
};
