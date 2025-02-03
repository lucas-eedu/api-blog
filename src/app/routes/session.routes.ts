import { Router, Request, Response } from 'express';

const sessionRouter = Router();

sessionRouter.post('/', (req: Request, res: Response) => {
  res.status(200).send('Olá mundo');
});

export default sessionRouter;
