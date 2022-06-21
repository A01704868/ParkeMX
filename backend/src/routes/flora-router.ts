import StatusCodes from 'http-status-codes';
import { Router } from 'express';
import { PrismaClient } from "@prisma/client";
//import { getFloraList } from '@services/flora-service';

const prisma = new PrismaClient();

// Constants
const router = Router();
const { OK, NOT_FOUND } = StatusCodes;

export async function getFloraList(id){
    const allFlora = await prisma.flora.findMany({
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
    return allFlora;
}

router.get('/flora/:id', async (req, res) => {
    const flora = await getFloraList(parseInt(req.params.id));  
    res.status(OK).json(flora);
});

export default router;