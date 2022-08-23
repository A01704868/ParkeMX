import React, { useState } from "react";
import "../css/customStyles.css";
import "../css/styles.css";
import {Button, Modal} from "react-bootstrap";
import { deletePark } from "../services/index";


function CardDelete(props){

  const [show, setShow] = useState(false);
  
  const [modal2, showModal2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteModal = () => {
    deletePark(props.id);
    handleClose();
    showModal2(true);
  }

  const continuar = () => {
    //return <Navigate to="/" />
    //se usa window.location.reload(false) porque el modal ya esta en la ruta "/"
    window.location.reload(false);
  }
  
    return(
        <>
        <Button
            className="link"
            variant="danger"
            onClick={() => handleShow()}
          >
            Eliminar
          </Button>

        <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Estas seguro que quieres borrar este parque nacional del sistema?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteModal()}>
            Si
          </Button>
          <Button variant="secondary" onClick={() => handleClose()}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modal2}>
        <Modal.Header>
          <Modal.Title>El parque se borro exitosamente</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={() => continuar()}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}

export default CardDelete;