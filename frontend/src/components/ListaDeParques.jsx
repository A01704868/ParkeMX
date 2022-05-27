import React, {useState, useEffect} from 'react';
import axios from "axios";
import BarraNav from './BarraNav';
import "../css/customStyles.css"
import { Dropdown, Card, Row, Col, Button, Carousel, Container, InputGroup, FormControl } from 'react-bootstrap';


const reverse = (arr1) => {

    const aux = [];

    for(let i = 0; i<arr1.length;i++){
        aux.unshift(arr1[i]);
    }

    return aux;
}

const renderCard = (card, index) => {
    const url = "http://localhost:4000/api/imgServe/"+card.id;
    return(
        <Col key = {card.id}>
            <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>{card.nombre}</Card.Title>
                    <Card.Img src={url} className="cardImage"/>
                    <Card.Text>
                    {card.descripcion}
                    </Card.Text>
                    <Card.Text>
                    {card.ubicacion}
                    </Card.Text>
                    <Button variant="primary">Mas Informacion</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

const renderCarousel = (card, index) => {
    const url = "http://localhost:4000/api/imgServe/"+card.id;

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

let icon = "caret-down-outline";

let toggle = 0;

function ListaDeParques(){
    
    const [parques, setParques] = useState([]);
    const [searchTerm, setSearch] = useState([""]);

    useEffect(() => {
        
        const getData = async()=>{
            await axios.get("http://localhost:4000/api/parques")
            .then(response => {setParques(response.data)})
            .catch(e=>console.log(e))
        }

        getData();
        
    }, []);

    const cardOrder = () => {
        if(toggle === 0){
            icon = "caret-up-outline";
            toggle = 1;
        }else{
            icon = "caret-down-outline";
            toggle = 0;
        }
        setParques(reverse(parques));
    }


    return(
        <div>
            <BarraNav />

            <Carousel>
                {parques.map(renderCarousel)}
            </Carousel>

            <h1>Encuentra Parques filtrando por Actividad</h1>

            <Container>
            <Row>
                <Col>
                <button type='button' className='arrow' onClick={() => cardOrder()}>
                    <span>
                        <ion-icon name={icon}></ion-icon>
                    </span>
                </button>
                </Col>
                <Col>

                <InputGroup className="mb-3">
                    <FormControl onChange={(event) => {setSearch(event.target.value)}}
                    placeholder="Busqueda"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2"><ion-icon name="search-outline" size="large"></ion-icon></InputGroup.Text>
                </InputGroup>
                
                </Col>
                <Col>
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
                </Col>
            </Row>
            </Container>

            <Row className="g-4">
                {// eslint-disable-next-line
                parques.filter((val) => {
                    if(searchTerm === ""){
                        return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toString().toLowerCase())){
                        return val;
                    }
                }).map(renderCard)}
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