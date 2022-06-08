import { PrismaClient } from '@prisma/client';
import { CartaRuta } from '@prisma/client';

const prisma = new PrismaClient();

export async function postCarts(cartaruta: CartaRuta): Promise<CartaRuta> {

    const{
        id,
        nombre,
        descripcion,
        parqueId,
    } = cartaruta;

const newCarta: CartaRuta = 
await prisma.cartaRuta.create({

    data: {
        id: 2,
        nombre: nombre,
        descripcion: descripcion,
        parqueId: parqueId,
    },

});

return newCarta;
    
}

export default{
    postCarts
} as const;