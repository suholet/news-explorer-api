const { httpCode } = require('./errHelper');

class AlreadyExistError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = httpCode.CONFLICT;
  }
}

module.exports = AlreadyExistError;
