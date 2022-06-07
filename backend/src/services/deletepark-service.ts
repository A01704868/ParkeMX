import { Parque, PrismaClient } from '@prisma/client';
//import { Parque } from '@prisma/client';

const prisma = new PrismaClient();
//const prisma = new PrismaClient({ log: ['query'] })


    /*export async function deleteParks(id: Parque["id"]): Promise<Parque> {
       /* const { 
            id,
        } = parque;
        
       
        //Eliminar parque
        const deletePark: Parque = await prisma.parque.delete({
            where: {
               id: id
            
            },
        });
        
        
        return deletePark;
        
        
    }*/
    export async function deleteParks(id:number) {
        /*const {
            id
        } = parque;*/
        
        const deletePark = await prisma.parque.delete({
            where:{
                id: id
            },

        });
        return deletePark;
        }
    


export default {
    deleteParks
} as const;