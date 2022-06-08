import StatusCodes, { CREATED } from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { postParks } from '@services/addpark-service';
import { prisma } from '@prisma/client';

// Constants
const router = Router();
const { OK } = StatusCodes;

router.post('/addparques', async (req: Request, res: Response) => {
    const { parque } = req.body ?? {};

    const parques = await postParks(parque);
    res.status(OK).json(parques);


});






export default router;