import { Request, Response } from 'express';
import TimestampService from './timestamp.service';

const TimestampController = {
  getNow(req: Request, res: Response) {
    res.json(TimestampService.getTimestamp(`${Date.now()}`));
  },
  getFromParam(req: Request, res: Response) {
    try {
      res.json(TimestampService.getTimestamp(req.params.date));
    } catch (e: any) {
      res.json({ error: e.message });
    }
  },
};

export default TimestampController;
