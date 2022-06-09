import React, {useState} from 'react';
import { Alert } from 'react-bootstrap';
import "../css/styles.css"

function Anuncio(props){
    const [show, setShow] = useState(true);
    console.log(props);

  if (show) {
    return (
      <Alert variant={props.variante} onClose={() => setShow(false)} dismissible className="banner">
        <Alert.Heading>{props.titulo}</Alert.Heading>
        <p>
          {props.descripcion}
        </p>
      </Alert>
    );
  }
  return (null);
}

export default Anuncio;
