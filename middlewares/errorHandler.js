const { httpCode, errMsg } = require('../errors/errHelper');

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || httpCode.INTERNAL_SERVER;

  res.status(statusCode).send({
    message: statusCode === httpCode.INTERNAL_SERVER ? errMsg.DEFAULT : err.message,
  });
  next();
};
