import StatusCodes from 'http-status-codes';
import { Router } from 'express';
import { getParks } from '@services/park-service';
import { access } from 'fs/promises';
import { getActivities } from '@services/activity-service';
import { getEncargado, createEncargado, deleteEncargado } from '@services/contact-service';
import { PrismaClient } from '@prisma/client'
import { ParamMissingError } from '@shared/errors';
import path from "path";

// Constants
const router = Router();
const { OK, NOT_FOUND } = StatusCodes;
const prisma = new PrismaClient();

const routesDir = __dirname.indexOf("routes");
const assetsDir = __dirname.slice(0, routesDir) + "assets";

router.get('/', async (req, res) => {
    const parks = await getParks();
    res.status(OK).json(parks);
});

// /api/parques/img/1 : ejemplo
router.get('/img/:id', async (req, res) => {
    let id = parseInt(req.params.id);

    try {
        const parks = await getParks();
        const park = parks.find(park => park.id === id);
        if (park) {
            const imgPath = path.join(assetsDir, park.imagen);

            // Checa si la imagen existe y tenemos acceso de escritura
            await access(imgPath);
            res.sendFile(imgPath);
        } else {
            res.status(NOT_FOUND).json(
            {
                error: "Image not found",
                parkId: id
            });
        }
    } catch (err) {
        res.status(NOT_FOUND).json(
        {
            error: "Image doesn't exist",
            parkId: id
        });
    }
});

async function getPark(id){
    const click = await prisma.parque.update({
        where: {
            id: id,
        },
        data: {
            clicks: {
                increment: 1,
            },
        }
    });
    const park = await prisma.parque.findUnique({
        where: {
            id: id,
          },
        include: {
            anuncios: true,
        }
    });
    return park;
}

//route for retrieving single park by id
router.get('/parque/:id', async (req, res) => {
    const park = await getPark(parseInt(req.params.id));
    res.status(OK).json(park);
});

//route for activity filter button
router.get('/activity', async (req, res) => {
    const activities = await getActivities();
    res.status(OK).json(activities);
});


// Export default
export default router;