import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { floraPark } from '@services/florapark-service';

// Constants
const router = Router();
const { OK } = StatusCodes;

router.post('/addFloraPark', async (req: Request, res: Response) => {

    const fP = await floraPark(parseInt(req.body.floraId), parseInt(req.body.parqueId));
    res.status(OK).json(fP);

});

export default router;