const router = require('express').Router();
const auth = require('../middlewares/auth');
const authRouter = require('./auth');
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const NotFoundError = require('../errors/notFoundError');

router.post('/signin', authRouter);
router.post('/signup', authRouter);
router.use('/users', auth, usersRouter);
router.use('/articles', auth, articlesRouter);

router.use((req, res, next) => {
  next(new NotFoundError('File not found.'));
});

module.exports = router;
