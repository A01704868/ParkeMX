import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import WeatherService from '@services/weather-service';
//import { ParamMissingError } from '@shared/errors';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;


/**
 * Get weather forecasts.
 */
router.get(p.get, async (req: Request, res: Response) => {
    const { city, state, country } = req.body;
    const forecast = await WeatherService.getWeatherByCity(city, state, country);

    return res.status(OK).json({forecast});
});

// Export default
export default router;
