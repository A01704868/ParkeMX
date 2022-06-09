import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
async function main() {
     const parqueSeeder = db.parque.createMany({
         data: [
             { nombre: "Alto Golfo de California y Delta del Río Colorado", descripcion: "alguna informacion basica", imagen: "20473816904.jpg", direccion: "P.º de los Héroes 96, Zona Urbana Rio Tijuana, 22010 Tijuana, B.C." , latitud: 31.737222222222, longitud: -114.5425, fechaDecreto: "1993/06/10", superficieMarina: 527608.70441, superficieTerrestre: 407147.54559, clicks: 20 },
             { nombre: "Arrecife Alacranes",  descripcion: "alguna informacion basica", imagen: "Isla_Perez.jpg", direccion: "acceso exclusivamente por via maritima",  latitud: 22.474538, longitud: -89.69506, fechaDecreto: "1994/06/06", superficieMarina: 333715.503244, superficieTerrestre: 53.001756, clicks: 15 },
             { nombre: "Arrecife de Puerto Morelos", descripcion: "alguna informacion basica", imagen: "PtoMorelos.jpg", direccion: "Plus Code: W53F+QXH Caracol, Quintana Roo",  latitud: 20.90444444, longitud: -86.825, fechaDecreto: "1998/02/02", superficieMarina: 9028.887456, superficieTerrestre: 37.743644, clicks: 30 },
             { nombre: "Arrecifes de Cozumel", descripcion: "alguna informacion basica", imagen: "cozumel-reef-parks.jpg", direccion: "Avenida 4 356, Centro, 77600 San Miguel de Cozumel, Q.R.",  latitud: 20.29361111, longitud: -87.02472222, fechaDecreto: "1996/07/19", superficieMarina: 11905.596084, superficieTerrestre: 82.278916, clicks: 40 },
             { nombre: "Arrecifes de Sian Ka'an", descripcion: "alguna informacion basica", imagen: "siankan-destacada.jpg",  direccion: "Felipe Carrillo Puerto, Quintana Roo",  latitud: 19.851182986831976,  longitud: -87.63879593136728, fechaDecreto: "1998/02/02", superficieMarina: 1361.001633, superficieTerrestre: 33566.156767, clicks: 10 },
             { nombre: "El Cimatario", descripcion: "alguna informacion basica", imagen: "cimatario.jpg",  direccion: "Edo de Mexico 4660, La Ceja, Qro.",  latitud: 20.534849962159694,  longitud: -100.3577293854862, fechaDecreto: "1982/07/21", superficieMarina: 0, superficieTerrestre: 2447.874, clicks: 15 },
         ]
     });

     const categoriaSeeder = db.categoria.createMany({
        data: [
            { nombre: "Reserva de la Biosfera" },
            { nombre: "Parque Nacional" },
            { nombre: "Reserva de la Biosfera" },
            { nombre: "Área de Protección de Flora y Fauna" },
            { nombre: "Monumento Natural" },
            { nombre: "Santuario" },
        ]
    });

    const categoriaParqueSeeder = db.categoriaParque.createMany({
        data: [
            {parqueId: 1, categoriaId: 1, assignedBy: "Seeder"},
            {parqueId: 2, categoriaId: 2, assignedBy: "Seeder"},
            {parqueId: 3, categoriaId: 2, assignedBy: "Seeder"},
            {parqueId: 4, categoriaId: 2, assignedBy: "Seeder"},
            {parqueId: 5, categoriaId: 1, assignedBy: "Seeder"},
            {parqueId: 6, categoriaId: 2, assignedBy: "Seeder"},
        ]
    });


    const estadoSeeder = db.estado.createMany({
        data: [
            { nombre: "Yucatán"},
            { nombre: "Quintana Roo"},
            { nombre: "Baja California Sur"},
            { nombre: "Campeche"},
            { nombre: "Hidalgo"},
            { nombre: "Michoacán"},
            { nombre: "Sonora"},
            { nombre: "Oaxaca"},
            { nombre: "Chiapas"},
            { nombre: "Chihuahua"},
            { nombre: "Tabasco"},
            { nombre: "Nuevo León"},
            { nombre: "Jalisco"},
            { nombre: "Estado de México"},
            { nombre: "Veracruz"},
            { nombre: "Coahuila"},
            { nombre: "Ciudad de México"},
            { nombre: "San Luis Potosí"},
            { nombre: "Guerrero"},
            { nombre: "Nayarit"},
            { nombre: "Durango"},
            { nombre: "Puebla"},
            { nombre: "Tlaxcala"},
            { nombre: "Colima"},
            { nombre: "Baja California"},
            { nombre: "Querétaro"},
        ]
    });

    const estadoParqueSeeder = db.estadoParque.createMany({
        data: [
            {parqueId: 1, estadoId: 25, assignedBy: "Seeder"},
            {parqueId: 1, estadoId: 7, assignedBy: "Seeder"},
            {parqueId: 2, estadoId: 1, assignedBy: "Seeder"},
            {parqueId: 3, estadoId: 2, assignedBy: "Seeder"},
            {parqueId: 4, estadoId: 2, assignedBy: "Seeder"},
            {parqueId: 5, estadoId: 2, assignedBy: "Seeder"},
            {parqueId: 6, estadoId: 26, assignedBy: "Seeder"},
        ]
    });

    const regionSeeder = db.region.createMany({
        data: [
            { nombre: "Noroeste y Alto Golfo de California"},
            { nombre: "Península de Yucatán y Caribe Mexicano"},
            { nombre: "Península de Baja California y Pacífico Norte"},
            { nombre: "Centro y Eje Neovolcánico"},
            { nombre: "Occidente y Pacífico Centro"},
            { nombre: "Frontera Sur, Istmo y Pacífico Sur"},
            { nombre: "Norte y Sierra Madre Occidental"},
            { nombre: "Noreste y Sierra Madre Oriental"},
            { nombre: "Planicie Costera y Golfo de México"},
        ]
    });

    const regionParqueSeeder = db.regionParque.createMany({
        data: [
            {parqueId: 1, regionId: 1, assignedBy: "Seeder"},
            {parqueId: 2, regionId: 2, assignedBy: "Seeder"},
            {parqueId: 3, regionId: 2, assignedBy: "Seeder"},
            {parqueId: 4, regionId: 2, assignedBy: "Seeder"},
            {parqueId: 5, regionId: 2, assignedBy: "Seeder"},
            {parqueId: 6, regionId: 4, assignedBy: "Seeder"},
        ]
    });

    const floraSeeder = db.flora.createMany({
        data: [
            { nombre: "Bugambilia", imagen: "bugambilia.jpg", descripcion: "informacion sobre la planta"},
            { nombre: "Lirio amarillo", imagen: "lily.jpg", descripcion: "informacion sobre la planta"},
            { nombre: "Hortensia", imagen: "hortensia.jpg", descripcion: "info de la planta"},
            { nombre: "Margarita", imagen: "margarita.jpg", descripcion: "info de la planta"},

        ]
    });

    const floraParqueSeeder = db.floraParque.createMany({
        data: [
            {parqueId: 1, floraId: 1, assignedBy: "Seeder"},
            {parqueId: 2, floraId: 2, assignedBy: "Seeder"},
            {parqueId: 3, floraId: 3, assignedBy: "Seeder"},
            {parqueId: 4, floraId: 4, assignedBy: "Seeder"},
            {parqueId: 6, floraId: 1, assignedBy: "Seeder"},
        ]
    });

    const faunaSeeder = db.fauna.createMany({
        data: [
            { nombre: "aguila", imagen: "aguila.jpg", descripcion: "informacion sobre el animal"},
            { nombre: "sardinilla", imagen: "sardinilla.jpg", descripcion: "informacion sobre el animal"},
            { nombre: "tarantula", imagen: "tarantula.jpg", descripcion: "informacion sobre el animal"},
        ]
    });

    const faunaParqueSeeder = db.faunaParque.createMany({
        data: [
            {parqueId: 1, faunaID: 1, assignedBy: "Seeder"},
            {parqueId: 2, faunaID: 2, assignedBy: "Seeder"},
            {parqueId: 3, faunaID: 2, assignedBy: "Seeder"},
            {parqueId: 6, faunaID: 3, assignedBy: "Seeder"},
        ]
    });

    const actividadSeeder = db.actividad.createMany({
        data: [
            { nombre: "Senderismo"},
            { nombre: "Ciclismo"},
            { nombre: "Natación"},
            { nombre: "Trotar"},
        ]
    });

    const actividadParqueSeeder = db.actividadParque.createMany({
        data: [
            {parqueId: 1, actividadId: 3, assignedBy: "Seeder"},
            {parqueId: 2, actividadId: 3, assignedBy: "Seeder"},
            {parqueId: 3, actividadId: 2, assignedBy: "Seeder"},
            {parqueId: 3, actividadId: 1, assignedBy: "Seeder"},
            {parqueId: 6, actividadId: 2, assignedBy: "Seeder"},
            {parqueId: 6, actividadId: 3, assignedBy: "Seeder"},
            {parqueId: 6, actividadId: 4, assignedBy: "Seeder"},
        ]
    });

    const anuncioSeeder = db.anuncio.createMany({
        data: [
            { titulo: "Alerta: El parque esta cerrado por lluvias pesadas", descripcion: "Gracias a una tormenta que se aproxima por el mar Pacifico, con designacion Mariana, El parque no se va a abrir por los siguientes 3 dias", variante: "danger", parqueId: 6},
            { titulo: "Advertensia: Temporada de Huracanes empieza en una semana", descripcion: "Resta una semana para visitar el parque hasta que se cierre indefinidamente", variante:"warning", parqueId: 3},
            { titulo: "Annuncio: Inauguración de instalación esta semana", descripcion: "la inauguración de la nueva instalación de alquiler de bicicletas será esta semana. Si quieres ir su inauguracion sera este jueves a las 15:00 horas", variante: "success", parqueId: 2},
            { titulo: "Advertencia: Hay una infestación de chinches", descripcion: "A principios de la temporada se encontraron chinches en la zona sur del parque. Quien sea que visite el sitio por favor tenga en cuenta esta informacion", variante: "warning", parqueId: 6},
        ]
    });

    const horarioSeeder = db.horario.createMany({
        data: [
            { dias: "Ju, Vi, Sa, Do", horaAbrir: "7:00", horaCerrar: "10:00", parqueId: 6 },
            { dias: "Jue, Vie, Sab, Dom", horaAbrir: "13:00", horaCerrar: "16:00", parqueId: 5 },
            { dias: "J, V, S, D", horaAbrir: "11:00", horaCerrar: "14:00", parqueId: 4 },
            { dias: "Lunes a Jueves", horaAbrir: "9:00", horaCerrar: "18:00", parqueId: 3 },
            { dias: "Lunes a Sabado", horaAbrir: "8:00", horaCerrar: "19:00", parqueId: 2 },
            { dias: "Lun, Mar, Mie, Jue, Sab, Dom", horaAbrir: "00:00", horaCerrar: "23:59", parqueId: 1 },
            { dias: "J, V, S, D", horaAbrir: "10:30", horaCerrar: "13:30", parqueId: 6 },
        ]
    });

    const usuarioSeeder = db.usuario.createMany({
        data: [
            { nombre: "Alex D", email: "A01704868@tec.mx", password: "ARRRS", role: "ADMIN"},
        ]
    });

    
    await parqueSeeder;
    await categoriaSeeder;
    await estadoSeeder;
    await regionSeeder;
    await estadoParqueSeeder;
    await categoriaParqueSeeder;
    await regionParqueSeeder;
    await floraSeeder;
    await floraParqueSeeder;
    await faunaSeeder;
    await faunaParqueSeeder;
    await actividadSeeder;
    await actividadParqueSeeder;
    await anuncioSeeder;
    await horarioSeeder;
    await usuarioSeeder;
    //const users = await db.usuario.findMany();
    //console.log(users);
}

main()
    .then(() => console.log("Executed seeder"))
    .catch((err) => console.error(err))
    .finally(async () =>{
        await db.$disconnect().catch((err) => `Failed to cleanup DB: ${err}`);
    });