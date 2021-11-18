import { Router } from 'express';
import TimestampController from './timestamp.controller';

const TimestampRouter = Router();

TimestampRouter.get('/', TimestampController.getNow);
TimestampRouter.get('/:date', TimestampController.getFromParam);

export default TimestampRouter;
