import { PrismaClient } from "@prisma/client";
import { FloraParque } from "@prisma/client";

const prisma = new PrismaClient();

export async function floraPark(floraId: number, parqueId: number): Promise<FloraParque> {
    
    const parkFlora: FloraParque = await prisma.floraParque.create({
        data: {
            parqueId: parqueId,
            floraId: floraId,
            assignedBy: "admin"
        }
    });

    return parkFlora;
}

export default {
    floraPark
} as const;