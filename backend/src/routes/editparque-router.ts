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


/*

router.put(p.update, async (req: Request, res: Response) => {

    const { encargado } = req.body ?? {};
    console.log(encargado)
    if(!encargado) {
        throw new ParamMissingError();
    }

    const editEncargado = await updateEncargado(encargado);
    if (!editEncargado) {
        return res.status(NOT_FOUND).json({ error: `No hay un encargado con id: ${encargado.id}` })
    }

    return res.status(OK).json(editEncargado);
});


*/