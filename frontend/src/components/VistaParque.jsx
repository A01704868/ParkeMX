import React from 'react';
import Navbar from './BarraNav';
import "../css/styles.css"
import { Card, Button, Carousel, Container} from 'react-bootstrap';

function VistaParque() {
  return(
    <div>
      <Navbar />

      <Carousel>
        <Carousel.Item className="carousel-hero">
          <img className="d-block w-100" src={require('../assets/header-placeholder.jpeg')} alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>Park Name 1</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-hero">
          <img className="d-block w-100" src={require('../assets/header-placeholder.jpeg')} alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>Park Name 1</h3>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="row-hero">
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={require('../assets/map-placeholder.jpg')} className="map-section"/>
        <Card.Body className="row-info-card">
        <div className="col-3">
          <Card.Title>HORARIO</Card.Title>
          <Card.Text>
            Lunes a Domingo: 9:00 a 18:00
          </Card.Text>
        </div>
        <div className="col-3">
          <Card.Title>UBICACIÓN</Card.Title>
          <Card.Text>
            Calle Ejemplo 123, Ejemplo, Ej
          </Card.Text>
        </div>
        <div className="col-3">
          <Card.Title>ESTACIONAMIENTO</Card.Title>
          <Card.Text>
            Éste parque si cuenta con estacionamiento
          </Card.Text>
        </div>
        </Card.Body>

        <Card.Body>
          <Button className="mt-5">¿CÓMO LLEGAR?</Button>
        </Card.Body>
      </Card>
      </Container>

      <div className="activities container-wide">
        <h1 className="mb-3"> ACTIVIDADES </h1>
        <div className="row-activities">
          <div className="col-6 pt-5 col-custom">
            <p>Acampar</p>
            <p>Pescar</p>
            <p>Caminar</p>
            <p>Bicicleta</p>
          </div>
          <div className="col-6 pt-5">
            <img className="d-block w-100" src={require('../assets/header-placeholder.jpeg')} alt="Imagen no disponible"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="mb-3"> FLORA Y FAUNA </h1>
        <Carousel className="car-center">
          <Carousel.Item className="carousel-img">
            <img className="d-block w-100" src={require('../assets/header-placeholder.jpeg')} alt="First slide"
          />
          </Carousel.Item>
          <Carousel.Item className="carousel-img">
            <img className="d-block w-100" src={require('../assets/header-placeholder.jpeg')} alt="First slide"
          />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
};

export default VistaParque;