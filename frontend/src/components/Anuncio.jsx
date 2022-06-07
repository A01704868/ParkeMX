import React, {useState} from 'react';
import { Alert } from 'react-bootstrap';

function Anuncio(props){
    const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Alerta!</Alert.Heading>
        <p>
          {props.descripcion}
        </p>
      </Alert>
    );
  }
  return (null);
}

export default Anuncio;