import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getHorario(){
    const allHorarios = await prisma.horario.findMany();
    return allHorarios;
}

getHorario()
    .catch( (e)=> {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect
    })

export default {
    getHorario
} as const;