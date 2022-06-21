import { PrismaClient } from '@prisma/client';
import {  Flora } from '@prisma/client';

const prisma = new PrismaClient();
//const prisma = new PrismaClient({ log: ['query'] })


export async function postFlora(flora: Flora): Promise<Flora> {
    //Crear un registro

    const newFlora: Flora =
     await prisma.flora.create({
        data: {
            nombre:  flora.nombre,
            titulo: flora.titulo,
            descripcion: flora.descripcion,
            imagen: flora.imagen,
            
        },
    });
    return newFlora;
}

export default {
    postFlora
} as const;