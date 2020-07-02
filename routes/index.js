const router = require('express').Router();
const auth = require('../middlewares/auth');
const authRouter = require('./auth');
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const NotFoundError = require('../errors/notFoundError');
const { errMsg } = require('../errors/errHelper');

router.post('/signin', authRouter);
router.post('/signup', authRouter);
router.use('/users', auth, usersRouter);
router.use('/articles', auth, articlesRouter);

router.use((req, res, next) => {
  next(new NotFoundError(`${errMsg.NOT_FOUND}`));
});

module.exports = router;
