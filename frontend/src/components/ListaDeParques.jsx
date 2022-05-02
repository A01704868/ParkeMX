import React, {useState, useEffect} from 'react';
import axios from "axios";
import BarraNav from './BarraNav';
import "../css/customStyles.css"
import { Dropdown, Card, Row, Col, Button, Carousel } from 'react-bootstrap';

function ListaDeParques(){

    const [parques, setParques] = useState([]);

    useEffect(() => {
        
        const getData = async()=>{
            await axios.get("http://localhost:4000/api/parques")
            .then(response => {setParques(response.data)})
            .catch(e=>console.log(e))
        }

        getData();
        
    }, []);

    const renderCard = (card, index) => {
        const url = "http://localhost:4000/api/imgServe/"+card.key;
        return(
            <Col>
                <Card style={{ width: '22rem' }} key={index}>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Img src={url} className="cardImage"/>
                    <Card.Text>
                    {card.horario}
                    </Card.Text>
                    <Card.Text>
                    {card.direccion}
                    </Card.Text>
                    <Button variant="primary">Mas Informacion</Button>
                </Card.Body>
            </Card>
            </Col>
        );
    }

    const renderCarousel = (card, index) => {
        const url = "http://localhost:4000/api/imgServe/"+card.key;

        return(
            <Carousel.Item key={index}>
                <img
                className="d-block w-100 cardImage"
                src={url}
                alt="First slide"
                />
                <Carousel.Caption>
                {card.title}
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

    //generate list of consecutive numbers the size of parques
    let arr = [];
    for (let i = 0; i <= parques.length; i++) {
        arr.push(i);
    }

    //choose random numbers from list and then remove them so there are no repetitions
    //store random numbers in new array
    let llaves = [], i = arr.length, j = 0;
    while(i--){
        j = Math.floor(Math.random() * (i));
        llaves.push(arr[j]);
        arr.splice(j,1);
    }

    //put the first 3 random numbers chosen in a newarray
    let aux = []
    for(let i = 0; i < 3; i++){
        aux.push(llaves[i]);
    }

    console.log(llaves);
    //filter list of parks by whether the park is included in the list of 3 arrays
    const cards = parques.filter(function(card, index){
        // eslint-disable-next-line
        if(aux.includes(index)){
            return true;
        }else{
            return false;
        }
    });

    return(
        <div>
            <BarraNav />

            <Carousel>
                {cards.map(renderCarousel)}
            </Carousel>

            <h1>Encuentra Parques filtrando por Actividad</h1>

            <Dropdown className="drop">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Selecciona
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Bicicleta</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hiking</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Camping</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Row className="g-4">
                {parques.map(renderCard)}
            </Row>

        </div>
    );  
}

export default ListaDeParques;

//ver el hook de useContext
//usar react-router-dom v6
//investigar lo de los providers
//no usar redux

//atomic design