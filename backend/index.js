const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mysql = require('mysql2');

app.use(express.json());
app.use(cors());

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'parkemx'
  });

  let cards = []
  // simple query
  connection.query(
    'SELECT * FROM parques ORDER BY parques.title',
    function(err, results, fields) {
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
    cards = results.slice();
    }
);

app.get('/', (request, response) => {
    response.send('Hello World');
});


app.get('/api/parques', (request, response) => {
    response.send(cards);
});

app.get('/api/imgServe/:id', (request, response) => {

    var options = {
        root: path.join(__dirname)
    };

    let id = request.params.id;

    for (let i in cards){
        if(cards[i].id == id){
            response.sendFile("/assets/"+cards[i].source, options);
        }
    }
});

app.listen(4000, () => console.log('Listening on port 4000...'));