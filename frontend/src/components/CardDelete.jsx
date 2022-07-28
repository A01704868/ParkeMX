import React, { useState } from "react";
import "../css/customStyles.css";
import "../css/styles.css";
import {Button, Modal} from "react-bootstrap";
import { deletePark } from "../services/index";

function CardDelete(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteModal = () => {
    deletePark(props.id);
    window.location.reload(true);
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
      </>
    );
}

export default CardDelete;