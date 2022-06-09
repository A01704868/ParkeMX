import StatusCodes, { CREATED } from 'http-status-codes';
import { Router, Request, Response } from 'express';
import {  postAnuncio } from '@services/addanuncio-service';
import { prisma } from '@prisma/client';

// Constants
const router = Router();
const { OK } = StatusCodes;

router.post('/addanuncio',async (req:Request, res: Response) => {
    console.log('VALOR:',req.body);
    const {  anuncio } = req.body ?? {};
    console.log('NEXT:',anuncio);
    
    const anuncios = await postAnuncio(anuncio);
    res.status(OK).json(anuncios);
    
});

export default router;