import React, {useState, useEffect} from 'react';
import BarraNav from './BarraNav';
import MainHeader from './MainHeader';
import { Dropdown, Card, Row, Col, Image, Button } from 'react-bootstrap';
import stock1 from "../assets/stock1.png";

function ListaDeParques(){

    const [parques, setParques] = useState([]);

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
            {Array.from({ length: 5 }).map((_, idx) => (
                <Col>
                <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Image src={stock1} className="cardImage"/>
                    <Card.Text>
                    Horario: 8:00-18:00
                    </Card.Text>
                    <Card.Text>
                    Direccion: Calle 5, Ejemplo
                    </Card.Text>
                    <Button variant="primary">Mas Informacion</Button>
                </Card.Body>
            </Card>
                </Col>
            ))}
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