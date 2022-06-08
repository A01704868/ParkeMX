import StatusCodes, { CREATED } from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { postCarts } from '@services/addcardrouter-service';
import { prisma } from '@prisma/client';

// Constants
const router = Router();
const { OK } = StatusCodes;

router.post('/addcartaruta',async (req:Request, res: Response) => {
    const { cartaRuta } = req.body ?? {};
    
    const cartarutas = await postCarts(cartaRuta);
    res.status(OK).json(cartarutas);
    
});

export default router;