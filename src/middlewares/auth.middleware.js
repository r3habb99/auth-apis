const jwt = require('jsonwebtoken');
const { Token } = require('../models');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const tokenExists = await Token.findOne({ where: { token } });

    if (!tokenExists) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;
