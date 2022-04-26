const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const staticCards = [
    {title: "Parque1", image: "../assets/stock1.png", direccion: "AV 1, calle 6, ejemplo", horario: "Horario: 8:00-18:00"},
    {title: "Parque2", image: "../assets/stock1.jpg", direccion: "AV 2, calle 7, ejemplo", horario: "Horario: 8:00-18:00"},
    {title: "Parque3", image: "../assets/stock2.jpg", direccion: "AV 3, calle 8, ejemplo", horario: "Horario: 8:00-18:00"},
    {title: "Parque4", image: "../assets/cimatario.jpg", direccion: "AV 4, calle 9, ejemplo", horario: "Horario: 8:00-18:00"},
    {title: "Parque5", image: "../assets/stock1.png", direccion: "AV 5, calle 10, ejemplo", horario: "Horario: 8:00-18:00"},
    
];

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/api/parques', (request, response) => {
    response.send(staticCards);
});

app.listen(4000, () => console.log('Listening on port 4000...'));