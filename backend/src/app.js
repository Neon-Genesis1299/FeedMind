import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import router from './routes/index.js';

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 4000);

const apiLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10),
  limit: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10),
  standardHeaders: true,
  legacyHeaders: false,
})

app.use([
  helmet(),
  cors()
])

app.use('/api', apiLimiter)

app.use([
  compression(),
  express.json(),
  express.urlencoded({ extended: false })
]);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/', router);


app.use((_req, res, _next) => {
  res.status(404).json({ status: 'error', message: 'Route not found'});
});

app.use((error, _req, res, _next) => {
    if (error.status) {
      res.status(error.status).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  },
);

export default app;