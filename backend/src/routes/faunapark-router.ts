import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { faunaPark } from '@services/faunapark-service';

// Constants
const router = Router();
const { OK } = StatusCodes;

router.post('/addFaunaPark', async (req: Request, res: Response) => {

    const faunaParque = await faunaPark(parseInt(req.body.faunaId), parseInt(req.body.parqueId));
    res.status(OK).json(faunaParque);

});

export default router;