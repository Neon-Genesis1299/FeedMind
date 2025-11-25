import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 4000);

app.use([compression(),
  express.json(),
  express.urlencoded({ extended: false })]);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/', router);


app.use((req, res, next) => {
  res.status(404).json('bad request');
});
app.use(
  (
    error,
    req,
    res,
    next,
  ) => {
    if (error.status) {
      res.status(error.status).json(error.message);
    } else {
      res.status(500).json('interval server error');
    }
  },
);

export default app;