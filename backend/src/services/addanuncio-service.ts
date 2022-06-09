import { PrismaClient } from '@prisma/client';
import { Anuncio } from '@prisma/client';

const prisma = new PrismaClient();
//const prisma = new PrismaClient({ log: ['query'] })


export async function postAnuncio(anuncio: Anuncio): Promise<Anuncio> {
    //Crear un registro
    console.log('EX: ',anuncio);

    const newAnuncio: Anuncio =
     await prisma.anuncio.create({
        data: {
            descripcion: anuncio.descripcion,
            parque: {
                connect: {
                    id: +anuncio.parqueId,
                }
            },
           
            
        },
    });

    console.log('PRISMA: ', newAnuncio);
    return newAnuncio;
}


    


export default {
     postAnuncio
} as const;