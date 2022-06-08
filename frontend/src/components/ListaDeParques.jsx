import React, {useState, useEffect} from 'react';
import axios from "axios";
import BarraNav from './BarraNav';
import carousel from './Carousel';
import "../css/customStyles.css"
import { Dropdown, Card, Row, Col, Carousel, Button, Container, InputGroup, FormControl } from 'react-bootstrap';


const reverse = (arr1) => {

    const aux = [];

    for(let i = 0; i<arr1.length;i++){
        aux.unshift(arr1[i]);
    }

    return aux;
}

const renderAbrir = (horario) => {
    return (
        <Container key = {horario.id}>
            <Card.Text>
            {horario.horaAbrir} - {horario.horaCerrar} - {horario.dias}
            </Card.Text>
        </Container>
    );
}

const renderCard = (card) => {
    const url = "http://localhost:4000/api/parques/img/"+card.id;

    return(
        <Col key = {card.id}>
            <Card style={{ width: '22rem', height: '100%'}}>
                <Card.Body>
                    <Card.Title>{card.nombre}</Card.Title>
                    <Card.Img src={url} className="cardImage"/>
                    <Card.Text>
                    {card.descripcion}
                    </Card.Text>
                    Direccion
                    <Card.Text>
                    {card.direccion}
                    </Card.Text>
                    Horarios
                    {card.horario.map(renderAbrir)}
                </Card.Body>
                <Button className="link" variant="primary" href={"/parque/"+card.id}>Mas Informacion</Button>
            </Card>
        </Col>
    );
}

const renderDropdown = (activity) => {

    return(
        <Dropdown.Item eventKey={activity.id} key={activity.id} href="#/action-1">{activity.nombre}</Dropdown.Item>
    );
}

let icon = "caret-down-outline";

let toggle = 0;

function ListaDeParques(){

    const [parques, setParques] = useState([]);
    const [searchTerm, setSearch] = useState("");
    const [activityButton, setActivityButton] = useState([]);
    const [searchActivity, setSearchActivity] = useState(0);
    //investigate reducer in react manual

    useEffect(() => {

        const getData = () => {
            let promise1 = axios.get("http://localhost:4000/api/parques");

            let promise2 = axios.get("http://localhost:4000/api/parques/activity");

            Promise.all([promise1, promise2])
            .then(values => {setParques(values[0].data); setActivityButton(values[1].data);})
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
                {parques.sort((a, b)=>{
                    if(a.clicks > b.clicks){
                        return -1;
                    }
                    if(a.clicks < b.clicks){
                        return 1;
                    }

                    return 0;
                }).slice(0,3).map(carousel)}
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
                    <Dropdown className="drop" onSelect={(eventKey, event) => {setSearchActivity(eventKey);}}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Actividades
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item eventKey="0" href="#/action-1">Todos</Dropdown.Item>
                            {activityButton.map(renderDropdown)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            </Container>

            <Row className="m-5 g-4">
                {// eslint-disable-next-line
                parques.filter((parque) => {

                    let result = true;

                    if(searchTerm !== ""){
                        result = result && parque.nombre.toLowerCase().includes(searchTerm.toString().toLowerCase())
                    }
                    // eslint-disable-next-line
                    if(searchActivity != 0){
                        let index = parque.actividades.findIndex((activity) => {
                            // eslint-disable-next-line
                            return (activity.actividadId == searchActivity);
                        });

                        result = result && (index !== -1);
                    }

                    return result;

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
