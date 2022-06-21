import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { postFlora } from '@services/addflora-service';

// Constants
const router = Router();
const { OK } = StatusCodes;

router.post('/addflora', async (req: Request, res: Response) => {

    const { flora } = req.body ?? {};

    const floras = await postFlora(flora);
    res.status(OK).json(floras);


});






export default router;