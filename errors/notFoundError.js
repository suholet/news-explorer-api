const { httpCode } = require('./errHelper');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = httpCode.NOT_FOUND;
  }
}

module.exports = NotFoundError;
