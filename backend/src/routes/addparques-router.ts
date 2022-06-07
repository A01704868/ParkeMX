import StatusCodes, { CREATED } from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { postParks } from '@services/addpark-service';
//import { deleteParks }  from '@services/addpark-service';
import { ParamMissingError } from '@shared/errors';
import { prisma } from '@prisma/client';

// Constants
const router = Router();
const { OK } = StatusCodes;

router.post('/', async (req: Request, res: Response) => {
    console.log(req);
    const { parque } = req.body ?? {};
    const parques = await postParks(parque);
    console.log(parque);
    console.log(parques);
    res.status(OK).json(parques);


});


/*
router.delete('/deleteparques:id'),async (req:Request, res:Response) => {
    
    const { id } = req.params;

    if (!id) {
        throw new ParamMissingError();
    }
    console.log(req);

    const deleteParque = await deleteParks(id);
    return res.status(OK).json(deleteParque);
    
};
*/

export default router;