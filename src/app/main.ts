import * as dotenv from 'dotenv';
dotenv.config();

import helmet from 'helmet';
import express from 'express';
import rateLimit from 'express-rate-limit';
import Logger from '@config/logger';
import { db } from '@config/database';
import morganMiddleware from '@middlewares/morganMiddleware';
import router from '@routes/main.routes';
import errorHandler from '@middlewares/errorHandler';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});

app.use(helmet());
app.use(express.json());
app.use(morganMiddleware);
app.use('/api', router);
app.use(errorHandler);
app.use(limiter);

const PORT = process.env.APP_PORT || 3000;

db.once('open', () => {
  app.listen(PORT, () => {
    Logger.info(`API Working => ${process.env.APP_URL}:${PORT}/api`);
  });
});
