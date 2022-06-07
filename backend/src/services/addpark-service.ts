import { PrismaClient } from '@prisma/client';
import { Parque } from '@prisma/client';

const prisma = new PrismaClient();
//const prisma = new PrismaClient({ log: ['query'] })


export async function postParks(parque: Parque): Promise<Parque> {
    //Crear un registro

    const { 
        id,
        nombre,
        descripcion,
        imagen,
        direccion,
        latitud,
        longitud, 
        fechaDecreto,
        superficieTerrestre,
        superficieMarina 
    } = parque;

    const newParque: Parque =
     await prisma.parque.create({
        data: {
            id: id,
            nombre:  nombre,
            descripcion: descripcion,
            imagen: imagen,
            direccion: direccion,
            latitud: latitud,
            longitud: longitud,
            fechaDecreto: fechaDecreto,
            superficieTerrestre: superficieTerrestre,
            superficieMarina: superficieMarina,
        },
    });
    return newParque;
}


    


export default {
    postParks
    
} as const;