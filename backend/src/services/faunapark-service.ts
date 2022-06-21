import { PrismaClient } from "@prisma/client";
import { FaunaParque } from "@prisma/client";

const prisma = new PrismaClient();

export async function faunaPark(faunaId: number, parqueId: number): Promise<FaunaParque> {
    
    const parkFauna: FaunaParque = await prisma.faunaParque.create({
        data: {
            parqueId: parqueId,
            faunaID: faunaId,
            assignedBy: "admin"
        }
    });

    return parkFauna;
}

export default {
    faunaPark
} as const;