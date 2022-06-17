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

function FaunaId() {

  const { id } = useParams();

  const [fauna, setFauna] = useState([]);

  useEffect(() => {
    const getData = () => {
      let promise1 = axios.get(
        "http://localhost:4000/api/parques/fauna/" + id
      );

      Promise.all([promise1])
      .then(values => {
        setFauna(values[0].data);
      })
      .catch((e) => console.log(e));
    };
    getData();
  }, []);
  console.log(fauna)

  return(
    <div>
      <Navbar />
      <Container className="pb-4">
        <h1>AQUI VA UNA IMAGEN QUE EL BUEN ALEX SE VA A RIFAR :D</h1>
      <img
        className="d-block w-100"
        src= {fauna.imagen}
      />
      </Container>
      <h1>{/*fauna.nombre*/}</h1>
      <Container className="pb-4">
        <h2>{/*fauna.titulo*/}Albatrosses are the world's largest seabirds.
        They spend at least 85% of their lives at sea returning
        to land (usually remote islands) to breed and raise their young. SUSTITUIR POR TITULO DESC</h2>

        <div className="row-info-card">
          <div className="col-6">
            <p className="mb-3">{/*fauna.descripcion*/}Naturally low productivity, combined with changes in climate and habitat conditions and certain fishing practices, make these seabirds highly vulnerable.
            Until recently scientists recognised 14 different species of albatrosses, but new research using DNA technology has confirmed as many as 24.
            Thirteen varieties breed in the New Zealand region – more than anywhere else in the world.
            Several are extremely rare, like the Antipodean albatross which breed in the sub Antarctic Island of Antipodes. </p>
          </div>
          <div className="col-6">
            <h2 className="mb-3"> Acá va el carusel </h2>
            <Carousel className="car-center">

            </Carousel>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );

}
export default FaunaId;
