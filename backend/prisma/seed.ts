import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();
async function main() {
     const parqueSeeder = db.parque.createMany({
         data: [
             { id: 1, nombre: "Alto Golfo de California y Delta del Río Colorado", descripcion: "alguna informacion basica", imagen: "20473816904.jpg", direccion: "P.º de los Héroes 96, Zona Urbana Rio Tijuana, 22010 Tijuana, B.C." , latitud: 31.737222222222, longitud: -114.5425, fechaDecreto: "1993/06/10", superficieMarina: 527608.70441, superficieTerrestre: 407147.54559 },
             { id: 2, nombre: "Arrecife Alacranes",  descripcion: "alguna informacion basica", imagen: "Isla_Perez.jpg", direccion: "acceso exclusivamente por via maritima",  latitud: 22.474538, longitud: -89.69506, fechaDecreto: "1994/06/06", superficieMarina: 333715.503244, superficieTerrestre: 53.001756 },
             { id: 3, nombre: "Arrecife de Puerto Morelos", descripcion: "alguna informacion basica", imagen: "PtoMorelos.jpg", direccion: "Plus Code: W53F+QXH Caracol, Quintana Roo",  latitud: 20.90444444, longitud: -86.825, fechaDecreto: "1998/02/02", superficieMarina: 9028.887456, superficieTerrestre: 37.743644 },
             { id: 4, nombre: "Arrecifes de Cozumel", descripcion: "alguna informacion basica", imagen: "cozumel-reef-parks.jpg", direccion: "Avenida 4 356, Centro, 77600 San Miguel de Cozumel, Q.R.",  latitud: 20.29361111, longitud: -87.02472222, fechaDecreto: "1996/07/19", superficieMarina: 11905.596084, superficieTerrestre: 82.278916 },
             { id: 5, nombre: "Arrecifes de Sian Ka'an", descripcion: "alguna informacion basica", imagen: "siankan-destacada.jpg",  direccion: "Felipe Carrillo Puerto, Quintana Roo",  latitud: 19.851182986831976,  longitud: -87.63879593136728, fechaDecreto: "1998/02/02", superficieMarina: 1361.001633, superficieTerrestre: 33566.156767 },
             { id: 6, nombre: "El Cimatario", descripcion: "alguna informacion basica", imagen: "cimatario.jpg",  direccion: "Edo de Mexico 4660, La Ceja, Qro.",  latitud: 20.534849962159694,  longitud: -100.3577293854862, fechaDecreto: "1982/07/21", superficieMarina: 0, superficieTerrestre: 2447.874 },
         ]
     });

     const categoriaSeeder = db.categoria.createMany({
        data: [
            { id: 1, nombre: "Reserva de la Biosfera" },
            { id: 2, nombre: "Parque Nacional" },
            { id: 3, nombre: "Reserva de la Biosfera" },
            { id: 4, nombre: "Área de Protección de Flora y Fauna" },
            { id: 5, nombre: "Monumento Natural" },
            { id: 6, nombre: "Santuario" },
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
            { id: 1, nombre: "Yucatán"},
            { id: 2, nombre: "Quintana Roo"},
            { id: 3, nombre: "Baja California Sur"},
            { id: 4, nombre: "Campeche"},
            { id: 5, nombre: "Hidalgo"},
            { id: 6, nombre: "Michoacán"},
            { id: 7, nombre: "Sonora"},
            { id: 8, nombre: "Oaxaca"},
            { id: 9, nombre: "Chiapas"},
            { id: 10, nombre: "Chihuahua"},
            { id: 11, nombre: "Tabasco"},
            { id: 12, nombre: "Nuevo León"},
            { id: 13, nombre: "Jalisco"},
            { id: 14, nombre: "Estado de México"},
            { id: 15, nombre: "Veracruz"},
            { id: 16, nombre: "Coahuila"},
            { id: 17, nombre: "Ciudad de México"},
            { id: 18, nombre: "San Luis Potosí"},
            { id: 19, nombre: "Guerrero"},
            { id: 20, nombre: "Nayarit"},
            { id: 21, nombre: "Durango"},
            { id: 22, nombre: "Puebla"},
            { id: 23, nombre: "Tlaxcala"},
            { id: 24, nombre: "Colima"},
            { id: 25, nombre: "Baja California"},
            { id: 26, nombre: "Querétaro"},
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
            { id: 1, nombre: "Noroeste y Alto Golfo de California"},
            { id: 2, nombre: "Península de Yucatán y Caribe Mexicano"},
            { id: 3, nombre: "Península de Baja California y Pacífico Norte"},
            { id: 4, nombre: "Centro y Eje Neovolcánico"},
            { id: 5, nombre: "Occidente y Pacífico Centro"},
            { id: 6, nombre: "Frontera Sur, Istmo y Pacífico Sur"},
            { id: 7, nombre: "Norte y Sierra Madre Occidental"},
            { id: 8, nombre: "Noreste y Sierra Madre Oriental"},
            { id: 9, nombre: "Planicie Costera y Golfo de México"},
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
            { id: 1, nombre: "Bugambilia", imagen: "bugambilia.jpg", descripcion: "informacion sobre la planta"},
            { id: 2, nombre: "Lirio amarillo", imagen: "lily.jpg", descripcion: "informacion sobre la planta"},
            { id: 3, nombre: "Hortensia", imagen: "hortensia.jpg", descripcion: "info de la planta"},
            { id: 4, nombre: "Margarita", imagen: "margarita.jpg", descripcion: "info de la planta"},

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
            { id: 1, nombre: "aguila", imagen: "aguila.jpg", descripcion: "informacion sobre el animal"},
            { id: 2, nombre: "sardinilla", imagen: "sardinilla.jpg", descripcion: "informacion sobre el animal"},
            { id: 3, nombre: "tarantula", imagen: "tarantula.jpg", descripcion: "informacion sobre el animal"},
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
            { id: 1, nombre: "Hiking"},
            { id: 2, nombre: "Cyclying"},
            { id: 3, nombre: "Swimming"},
            { id: 4, nombre: "Jogging"},
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
            { id: 1, descripcion: "Tormenta se aproxima", parqueId: 6},
            { id: 2, descripcion: "Temporada de Huracanes empieza en una semana", parqueId: 3},
            { id: 3, descripcion: "Lluvias pesadas este fin de semana", parqueId: 2},
            { id: 4, descripcion: "Hola soy un anuncio!!", parqueId: 6},
        ]
    });

    const horarioSeeder = db.horario.createMany({
        data: [
            { id: 1, dias: "Ju, Vi, Sa, Do", horaAbrir: "7:00", horaCerrar: "10:00", parqueId: 6 },
            { id: 2, dias: "Jue, Vie, Sab, Dom", horaAbrir: "13:00", horaCerrar: "16:00", parqueId: 5 },
            { id: 3, dias: "J, V, S, D", horaAbrir: "11:00", horaCerrar: "14:00", parqueId: 4 },
            { id: 4, dias: "Lunes a Jueves", horaAbrir: "9:00", horaCerrar: "18:00", parqueId: 3 },
            { id: 5, dias: "Lunes a Sabado", horaAbrir: "8:00", horaCerrar: "19:00", parqueId: 2 },
            { id: 6, dias: "Lun, Mar, Mie, Jue, Sab, Dom", horaAbrir: "00:00", horaCerrar: "23:59", parqueId: 1 },
            { id: 7, dias: "J, V, S, D", horaAbrir: "10:30", horaCerrar: "13:30", parqueId: 6 },
        ]
    });

    const usuarioSeeder = db.usuario.createMany({
        data: [
            { id: 1, nombre: "Alex D", email: "A01704868@tec.mx", password: "ARRRS", role: "ADMIN"},
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