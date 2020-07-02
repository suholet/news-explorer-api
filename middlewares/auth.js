const jwt = require('jsonwebtoken');
const UnathorizedError = require('../errors/unathorizedError');
const { errMsg } = require('../errors/errHelper');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new UnathorizedError(`${errMsg.UNATHORIZED}`);
  }

  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new UnathorizedError(`${errMsg.UNATHORIZED}`));
  }
  req.user = payload;
  next();
};
