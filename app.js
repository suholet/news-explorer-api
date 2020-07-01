const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes/index');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/newsdb';
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Подключаемся к БД
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(limiter);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключаем логгер запросов
app.use(requestLogger);

// Подключаем рауты приложения
app.use('/', router);

// Подключаем логгер ошибок
app.use(errorLogger);

// Обработчик ошибок celebrate
app.use(errors());

// Централизованный обработчик ошибок
app.use(errorHandler);

app.listen(PORT);
