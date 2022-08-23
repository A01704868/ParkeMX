import React, { useState } from "react";
import "../css/customStyles.css";
import "../css/styles.css";
import {Button, Modal} from "react-bootstrap";
import { deleteHorario } from "../services/index";

function HorarioDelete(props){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteModal = () => {
    deleteHorario(props.id);
    window.location.reload(false);
  }

  return(
    <>
        <Button
          className="link"
          variant="warning"
          onClick={() => handleShow()}
        >
          Eliminar Horario
        </Button>

        <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Estas seguro que quieres borrar este horario?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="warning" onClick={() => deleteModal()}>
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

export default HorarioDelete;