import React from "react";
import "../css/customStyles.css";
import { Carousel } from "react-bootstrap";

const carousel = (show) => {

  return (
    <Carousel.Item key={show.id}>
      <img
        className="d-block w-100 cardImage"
        src={show.imagen}
        alt="First slide"
      />
      <Carousel.Caption>{show.nombre}</Carousel.Caption>
    </Carousel.Item>
  );
};

export default carousel;
