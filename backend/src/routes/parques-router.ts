import StatusCodes from 'http-status-codes';
import { Router } from 'express';

//const parkService = require('../services/park-service');
const {PrismaClient} = require('@prisma/client');
const path = require('path');

// Constants
const prisma = new PrismaClient();

const router = Router();
const { CREATED, OK } = StatusCodes;

router.get('/', async (req, res) => {
    const parks = await getParks();
    return res.status(OK).json(parks);
});

/*router.get('/imgServe/:id', async (req, res) => {
    var options = {
        root: path.join(__dirname)
    };

    let id = req.params.id;

    for (let i in cards){
        if(cards[i].id == id){
            res.sendFile("/assets/"+cards[i].imagen, options);
        }
    }
});*/

async function getParks(){
    const allParks = await prisma.parque.findMany();
    return allParks;
}

getParks()
    .catch( (e)=> {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect
    })

// Export default
export default router;