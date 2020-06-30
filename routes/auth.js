const authRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  login,
  createUser,
} = require('../controllers/auth');

authRouter.post('/signin', celebrate({
  headers: Joi.object().keys({
    'content-type': Joi.string().required().regex(/application\/json/),
  }).unknown(true),
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}),
login);

authRouter.post('/signup', celebrate({
  headers: Joi.object().keys({
    'content-type': Joi.string().required().regex(/application\/json/),
  }).unknown(true),
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
}),
createUser);

module.exports = authRouter;
