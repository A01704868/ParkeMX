import React from 'react';
import "../css/customStyles.css"
import { Carousel } from 'react-bootstrap';

const carousel = (card) => {
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

export default carousel;