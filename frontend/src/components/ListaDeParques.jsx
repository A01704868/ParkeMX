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

const renderCard = (card) => {
    const url = "http://localhost:4000/api/parques/img/"+card.id;
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
                    {card.direccion}
                    </Card.Text>
                    <Button variant="primary">Mas Informacion</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

const renderCarousel = (card) => {
    const url = "http://localhost:4000/api/parques/img/"+card.id;

    return(
        <Carousel.Item key={card.id}>
            <img
            className="d-block w-100 cardImage"
            src={url}
            alt="First slide"
            />
            <Carousel.Caption>
            {card.nombre}
            </Carousel.Caption>
        </Carousel.Item>
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
    const [horario, setHorario] = useState();
    const [parqueActividad, setParqueActividad] = useState(null);
    const [searchActivity, setSearchActivity] = useState(0);
    //investigate reducer in react manual

    useEffect(() => {

        const getData = () => {
            let promise1 = axios.get("http://localhost:4000/api/parques");

            let promise2 = axios.get("http://localhost:4000/api/parques/activity");

            let promise3 = axios.get("http://localhost:4000/api/parques/activityParque");

            let promise4 = axios.get("http://localhost:4000/api/parques/horario");

            Promise.all([promise1, promise2, promise3, promise4])
            .then(values => {setParques(values[0].data); setActivityButton(values[1].data); setHorario(values[2].data); setParqueActividad(values[3].data);})
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

            <Row className="g-4">
                {// eslint-disable-next-line
                parques.filter((parque) => {

                    console.log("Search Term",searchTerm);
                    console.log("Activity", searchActivity);
                    let result = true;

                    if(searchTerm !== ""){
                        result = result && parque.nombre.toLowerCase().includes(searchTerm.toString().toLowerCase())

                    }
                    
                    if(searchActivity != 0){
                        let index = parque.actividades.findIndex((activity) => {
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
