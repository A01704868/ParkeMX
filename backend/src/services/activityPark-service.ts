import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getActivityParque(){
    const activityParque = await prisma.actividadParque.findMany();
    return activityParque;
}

getActivityParque()
    .catch( (e)=> {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect
    })

export default {
    getActivityParque
} as const;