import React from 'react';
import Navbar from './BarraNav';
import Anuncio from './Anuncio';
import "../css/styles.css"
import { useParams } from 'react-router-dom';
import { Card, Button, Carousel, Container} from 'react-bootstrap';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, ReactElement, useState } from "react";
import axios from "axios";

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

  const {id} = useParams();

  const [parque, setParque] = useState({});
  const [anuncios, setAnuncios] = useState([]);
  const [abrir, setAbrir] = useState("");
  const [cerrar, setCerrar] = useState("");
  const [dias, setDias] = useState("");

  useEffect(() => {

    const getData = () => {
        let promise1 = axios.get("http://localhost:4000/api/parques/parque/"+id);

        Promise.all([promise1])
        .then(values => {
          setParque(values[0].data);
          setAnuncios(values[0].data.anuncios);
          setAbrir(values[0].data.horario[0].horaAbrir);
          setCerrar(values[0].data.horario[0].horaCerrar);
          setDias(values[0].data.horario[0].dias);
        })
        .catch(e=>console.log(e))
    }

    getData();

}, []);
const url = "http://localhost:4000/api/parques/img/"+parque.id;

  const center = { lat: parque.latitud, lng: parque.longitud };
  const zoom = 15;
  const height = 600;
  const visitar = "https://www.google.com/maps/place/"+parque.nombre;

  return(
    <div>

      <Navbar/>
      {
       anuncios.map(e=> <Anuncio descripcion={e.descripcion} titulo={e.titulo} variante={e.variante} />)
      }
      <Carousel>
        <Carousel.Item className="carousel-hero">
          <img className="d-block w-100" src={url} alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>{parque.nombre}</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-hero">
          <img className="d-block w-100" src={url} alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>{parque.nombre}</h3>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="row-hero">
      <Card style={{ width: '100%' }}>

      <Wrapper apiKey="AIzaSyBa_nu7n2b5Gs_J2YPiSSCKnKD-ZsdD0YA" render={render}>
        <MyMapComponent center={center} zoom={zoom} height={height}/>
      </Wrapper>
        <Card.Body className="row-info-card">
        <div className="col-3">
          <Card.Title>HORARIO</Card.Title>
          <Card.Text>
          {dias}
          </Card.Text>
          <Card.Text>
          {abrir} - {cerrar}
          </Card.Text>
        </div>
        <div className="col-3">
          <Card.Title>UBICACIÓN</Card.Title>
          <Card.Text>
            {parque.direccion}
          </Card.Text>
        </div>
        </Card.Body>

        <Card.Body>
          <Button className="mt-5" href={visitar}>¿CÓMO LLEGAR?</Button>
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
            <img className="d-block w-100" src={url} alt="Imagen no disponible"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="mb-3"> FLORA Y FAUNA </h1>
        <div className="row-info-card">
          <div className="col-6">
            <h2 className="mb-3"> FLORA </h2>
            <Carousel className="car-center">
              <Carousel.Item className="carousel-img">
                <img className="d-block w-100" src={url} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item className="carousel-img">
                <img className="d-block w-100" src={url} alt="First slide"/>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-6">
            <h2 className="mb-3"> FAUNA </h2>
            <Carousel className="car-center">
              <Carousel.Item className="carousel-img">
                <img className="d-block w-100" src={url} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item className="carousel-img">
                <img className="d-block w-100" src={url} alt="First slide"/>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
};

export default VistaParque;
