const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.json());
app.use(cors());

const staticCards = [
    {key: "0", title: "Parque1",  direccion: "AV 1, calle 6, ejemplo", horario: "Horario: 8:00-18:00", source:"stock1.jpg"},
    {key: "1", title: "Parque2",  direccion: "AV 2, calle 7, ejemplo", horario: "Horario: 8:00-18:00", source:"stock1.png"},
    {key: "2", title: "Parque3",  direccion: "AV 3, calle 8, ejemplo", horario: "Horario: 8:00-18:00", source:"stock2.jpg"},
    {key: "3", title: "Parque4",  direccion: "AV 4, calle 9, ejemplo", horario: "Horario: 8:00-18:00", source:"stock1.jpg"},
    {key: "4", title: "Parque5",  direccion: "AV 5, calle 10, ejemplo", horario: "Horario: 8:00-18:00", source:"stock1.png"},
    
];

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/api/parques', (request, response) => {
    response.send(staticCards);
});

app.get('/api/imgServe/:id', (request, response) => {

    var options = {
        root: path.join(__dirname)
    };

    let id = request.params.id;

    for (let i in staticCards){
        if(staticCards[i].key == id){
            response.sendFile("/assets/"+staticCards[i].source, options);
        }
    }
});

app.listen(4000, () => console.log('Listening on port 4000...'));