const Article = require('../models/article');
const NotFoundError = require('../errors/notFoundError');
const AccessDeniedError = require('../errors/accessDeniedError');

module.exports.getArticles = (req, res, next) => {
  Article.find({})
    .populate('owner')
    .then((articles) => res.send(articles))
    .catch(next);
};

module.exports.saveArticle = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner = req.user._id,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner,
  })
    .then((article) => res.send(
      {
        data: {
          keyword: article.keyword,
          title: article.title,
          text: article.text,
          date: article.date,
          source: article.source,
          link: article.link,
          image: article.image,
        },
      },
    ))
    .catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId).select('+owner')
    .orFail(() => {
      throw new NotFoundError(`Can't find article with id:${req.params.articleId}!`);
    })
    .then((article) => {
      if (article.owner.equals(req.user._id)) {
        article.remove();
        res.send(
          {
            data: {
              keyword: article.keyword,
              title: article.title,
              text: article.text,
              date: article.date,
              source: article.source,
              link: article.link,
              image: article.image,
            },
          },
        );
      } else {
        throw new AccessDeniedError('Only owner can delete article!');
      }
    })
    .catch(next);
};
