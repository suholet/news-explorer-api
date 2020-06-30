const User = require('../models/user');
const NotFoundError = require('../errors/notFoundError');

module.exports.getCurrentUser = (req, res, next) => {
  User.find({ _id: req.user._id })
    .then((user) => {
      if (!user || !user.length) {
        throw new NotFoundError(`Can't find user with id:${req.user._id}`);
      } else {
        res.send(user);
      }
    })
    .catch(next);
};
