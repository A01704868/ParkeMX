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
            titulo: anuncio.titulo,
            descripcion: anuncio.descripcion,
            variante: anuncio.variante,
            parqueId: anuncio.parqueId,
            
        },
    });

    console.log('PRISMA: ', newAnuncio);
    return newAnuncio;
}


    


export default {
     postAnuncio
} as const;