const httpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  UNATHORIZED: 401,
  FORBIDEN: 403,
  CONFLICT: 409,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
};

Object.freeze(httpCode);

// const errMsg = {
//   ACCESS_DENIED: 'Only owner can delete article!',
//   NO_USER: "Can't find user with id:",
//   NO_ARTICLE: "Can't find article with id:",
//   INCORRECT_LOGIN: 'Wrong email or password!',
//   UNATHORIZED: 'Unauthorized',
//   INVALID_LINK: 'is not a valid link!',
//   INVALID_EMAIL: 'is not a valid email!',
//   NOT_FOUND: 'File not found.',
//   DEFAULT: 'Error',
// };

const errMsg = {
  ACCESS_DENIED: 'ACCESS_DENIED', // 'Only owner can delete article!',
  NO_USER: 'NO_USER', // "Can't find user with id:",
  NO_ARTICLE: 'NO_ARTICLE', // "Can't find article with id:",
  INCORRECT_LOGIN: 'INCORRECT_LOGIN', // 'Wrong email or password!',
  UNATHORIZED: 'UNATHORIZED', // 'Unauthorized',
  INVALID_LINK: 'INVALID_LINK', // 'is not a valid link!',
  INVALID_EMAIL: 'INVALID_EMAIL', // 'is not a valid email!',
  NOT_FOUND: 'NOT_FOUND', // 'File not found.',
  DEFAULT: 'DEFAULT', // 'Error',
};

Object.freeze(errMsg);

module.exports = {
  httpCode,
  errMsg,
};
