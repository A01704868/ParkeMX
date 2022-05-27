import StatusCodes from 'http-status-codes';
import { Router } from 'express';
import { getParks } from '@services/park-service';
//import { Parque } from '@prisma/client';
import { access } from 'fs/promises';
import path from "path";

// Constants
const router = Router();
const { OK, NOT_FOUND } = StatusCodes;

const routesDir = __dirname.indexOf("routes");
const assetsDir = __dirname.slice(0, routesDir) + "assets";

router.get('/', async (req, res) => {
    const parks = await getParks();
    res.status(OK).json(parks);
});

// /api/parques/imgServe/1 : ejemplo
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

// Export default
export default router;