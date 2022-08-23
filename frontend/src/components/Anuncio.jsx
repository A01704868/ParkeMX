import React, {useState} from 'react';
import { Alert, Button, Modal  } from 'react-bootstrap';
import { deleteAnuncio } from "../services/index";
import "../css/styles.css"
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";


function Anuncio(props){
    const [alert, setAlert] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handleOnclick(id){
      deleteAnuncio(id);
      window.location.reload(false);
    }


  if (alert) {
    return (
      <>
      <Alert show={alert} variant={props.variante} onClose={() => setAlert(false)} dismissible style={{ position: "absolute", top: "0", left: "0", width: "100%", zIndex: "1" }}>
        <Alert.Heading>{props.titulo}</Alert.Heading>
        <p>
          {props.descripcion}
        </p>
        <RBACWrapper requiredRoles={[AppRoles.ADMIN]}>
        <div className="d-flex justify-content-center">
          <Button onClick={handleShow} variant="outline-danger" style={{ width: "10%" }}>
            <ion-icon name="trash-outline"></ion-icon>
          </Button>
        </div>
        </RBACWrapper>
      </Alert>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Borrar Anuncio</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estas seguro que quieres borrar este anuncio?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No, gracias
          </Button>
          <Button variant="primary" onClick={() => handleOnclick(props.id)}>
            Si, por favor
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  return (null);
}

export default Anuncio;
