import React from 'react';
import "../css/customStyles.css"
import { Carousel} from 'react-bootstrap';
import stock from '../assets/cimatario.jpg';

function MainHeader(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block stockImage"
                    src={stock}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Parques</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block stockImage"
                    src={stock}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>Parques</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block stockImage"
                    src={stock}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>Parques</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MainHeader;