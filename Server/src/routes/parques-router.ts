import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

router.get('/', (req: Request, res: Response) => {
    return res.status(OK).json('Hello World');
});

// Export default
export default router;