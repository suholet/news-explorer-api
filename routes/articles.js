const articlesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getArticles,
  saveArticle,
  deleteArticle,
} = require('../controllers/articles');

articlesRouter.get('/', getArticles);

articlesRouter.post('/', celebrate({
  headers: Joi.object().keys({
    'content-type': Joi.string().required().regex(/application\/json/),
  }).unknown(true),
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.date().required(),
    source: Joi.string().required(),
    link: Joi.string().required().uri({
      scheme: ['http', 'https'],
    }),
    image: Joi.string().required().uri({
      scheme: ['http', 'https'],
    }),
  }),
}),
saveArticle);

articlesRouter.delete('/:articleId', celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().alphanum().length(24),
  }),
}),
deleteArticle);

module.exports = articlesRouter;
