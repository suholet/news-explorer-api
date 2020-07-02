const { httpCode } = require('./errHelper');

class AccessDeniedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = httpCode.FORBIDEN;
  }
}

module.exports = AccessDeniedError;
