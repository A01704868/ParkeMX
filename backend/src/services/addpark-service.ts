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




/*postParks()
    .catch( (e)=> {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect
    })*/

    //Eliminar

    export async function deleteParks(parque: Parque): Promise<Parque> {
        //Eliminar parque
        const deletePark = await prisma.parque.delete({
            where: {
               id: parque.id,
            
            }
        });
        //res.json(deletePark)
        console.log(deletePark)
        
        return deletePark;
        
        
    }
    


export default {
    postParks,
    deleteParks
} as const;