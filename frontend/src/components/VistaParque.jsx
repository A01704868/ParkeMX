import React from 'react';
import Navbar from './BarraNav';
import "../css/styles.css"
import { Card, Button, Carousel, Container} from 'react-bootstrap';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, ReactElement } from "react";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
  center,
  zoom,
  width,
  height,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  width: 100;
  height: 100;
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

function VistaParque() {

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

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

      <Wrapper apiKey="AIzaSyA43ED2GOn-3qLT2c6tP1Wh2eYZ1R3ldcs" render={render}>
        <MyMapComponent center={center} zoom={zoom} />
      </Wrapper>
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
