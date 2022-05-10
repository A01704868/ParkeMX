// import { PrismaClient } from '@prisma/client'
import WeatherService from '../src/services/weather-service';

// const prisma = new PrismaClient()

// async function GetAllUsers () {
//     return await prisma.usuario.findMany({
//         select: { password: false, nombre: true, email: true, role: true }
//     });
// }

// async function DeleteAllUsers () {
//     return await prisma.usuario.deleteMany();
// }

// async function AddTestUsers () {
//     return await prisma.usuario.createMany({
//         data: [
//             { email: "eduardo-larios@outlook.com", nombre: "Eduardo Larios", password: "hunter2" },
//             { email: "sofia-soto@gmail.com", nombre: "Sofia Soto", password: "Sofia1999." }
//         ]
//     })
// }

(async () => {
    const forecast = await WeatherService.getWeatherByCity("León", "Guanajuato", "MX");

    console.debug(forecast);

})().then(() => console.log("Finished executing")).catch(e => console.error(e))