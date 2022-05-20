const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

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