import StatusCodes from 'http-status-codes';
import { Router } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Constants
const router = Router();
const { OK, NOT_FOUND } = StatusCodes;

export async function getFaunaList(id){
    const allFauna = await prisma.fauna.findMany({
        where: {
            parques:{
                none: {
                    parqueId: id,
                },
            },
        },
        orderBy: [
            {
              id: 'asc',
            },
          ],
    });
    return allFauna;
}

router.get('/fauna/:id', async (req, res) => {
    const fauna = await getFaunaList(parseInt(req.params.id));  
    res.status(OK).json(fauna);
});

export default router;