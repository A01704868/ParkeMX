import React from "react";
import Navbar from "./BarraNav";
import Footer from "./Footer";
import "../css/styles.css";
//import { useParams } from "react-router-dom";
//import { Card, Button, Carousel, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Carousel, Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function FloraId() {

  const { id } = useParams();

  const [flora, setFlora] = useState([]);

  useEffect(() => {
    const getData = () => {
      let promise1 = axios.get(
        "http://localhost:4000/api/parques/flora/" + id
      );

      Promise.all([promise1])
      .then(values => {
        setFlora(values[0].data);
      })
      .catch((e) => console.log(e));
    };
    getData();
  }, []);
  console.log(flora)

  return(
    <div>
      <Navbar />
      <div className="full-width mt-4">
        <img
          className="hero-img-flora img-fauna pb-4"
          src= {flora.imagen}
        />
        <div>
          <h1>{flora.nombre}</h1>
        </div>
      </div>
      <Container className="pb-4">
        <h2>{ flora.titulo }</h2>
        <div className="pb-4"></div>
        {/*<div className="row-info-card">
          <div className="col-6 col-custom">
            <p className="mb-3">{flora.descripcion}</p>
          </div>
          <div className="col-6">
          <img
            className="size-fixed pb-4"
            src= {flora.imagen}
          />
          </div>
        </div>*/}
        <p className="mb-3">{flora.descripcion}</p>
      </Container>

      <Footer />
    </div>
  );

}
export default FloraId;
