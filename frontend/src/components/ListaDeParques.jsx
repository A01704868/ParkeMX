import React, {useState, useEffect} from 'react';
import axios from "axios";
import BarraNav from './BarraNav';
import MainHeader from './MainHeader';
import { Dropdown, Card, Row, Col, Button } from 'react-bootstrap';


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

    console.log(parques);

    const renderCard = (card, index) => {
        return(
            <Col>
                <Card style={{ width: '22rem' }} key={index}>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Img src={require("../assets/stock1.png")} className="cardImage"/>
                    <Card.Text>
                    {card.image}
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

    return(
        <div>
            <BarraNav />
            <MainHeader />

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