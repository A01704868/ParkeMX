import { Router, Request, Response } from 'express';
import StatusCodes from 'http-status-codes'
import { ParamMissingError } from '@shared/errors';
import { editParks } from '@services/editPark-service';

const router = Router();
const { OK } = StatusCodes;

router.put('/editParque', async (req:Request, res:Response) => {

    let parque = req.body;

    if(!parque.id) {
        throw new ParamMissingError();
    }
    console.log(parque);


    const updateParque = await editParks(parque);
    return res.status(OK).json()
    
})

export default router;