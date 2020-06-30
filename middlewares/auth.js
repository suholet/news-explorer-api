const jwt = require('jsonwebtoken');
const UnathorizedError = require('../errors/unathorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new UnathorizedError('Unauthorized');
  }

  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new UnathorizedError('Unauthorized'));
  }
  req.user = payload;
  next();
};
