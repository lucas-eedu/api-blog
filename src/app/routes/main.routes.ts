import { Router } from 'express';
import sessionRouter from '@routes/session.routes';

const routes = Router();

routes.use('/session', sessionRouter);

export default routes;
