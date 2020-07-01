const { httpCode } = require('./errHelper');

class UnathorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = httpCode.UNATHORIZED;
  }
}

module.exports = UnathorizedError;
