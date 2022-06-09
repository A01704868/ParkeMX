import { Router } from 'express';
import { adminMw } from './middleware';
import authRouter from './auth-router';
import userRouter from './user-router';
import weatherRouter from './weather-router';
import parquesRouter from './parques-router';
import addparquesRouter from './addparques-router';
import deleteparquesRouter from './deleteparques-router';
import editparquesRouter from './editparque-router';
import addcartasrutasRouter from './addcardroutes-router';
import deletecartasrutasRouter from './deletecardroutes-router';
import editcartasrutasRouter from './editcardroute-router';
import addhorarioRouter from './addhorario-router';
import deletehorarioRouter from './deletehorario-router';


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use('/auth', authRouter);
apiRouter.use('/users', adminMw, userRouter);
apiRouter.use('/weather', weatherRouter);
apiRouter.use('/parques', parquesRouter);
apiRouter.use('/', addparquesRouter);
apiRouter.use('/', deleteparquesRouter);
apiRouter.use('/', editparquesRouter);
apiRouter.use('/', addcartasrutasRouter);
apiRouter.use('/', deletecartasrutasRouter);
apiRouter.use('/', editcartasrutasRouter);
apiRouter.use('/', addhorarioRouter);
apiRouter.use('/', deletehorarioRouter);


// Export default
export default apiRouter;
