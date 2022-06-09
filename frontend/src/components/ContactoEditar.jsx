import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const contactoUrl = "http://localhost:4000/api/encargado";
const editarContacto = (encargado, onClose) => {
  if (!encargado) {
    return;
  }
  
  axios.put(`${contactoUrl}/update`, encargado)
    .then((_) => onClose())
    .catch((_) => onClose());
}

const ContactoEditar = ({ idContacto, mostrarForma, onClose }) => {
  const handleSave = (event) => {
    const [nombreField, telefonoField] = event.target;
    const nombre = nombreField.value ?? "";
    const telefono = telefonoField.value ?? "";

    if (idContacto === null || idContacto === undefined) {
      return;
    }
    if (!nombre || !telefono) {
      return;
    }
    
    const contactoUpdated = { encargado: { id: idContacto, nombre, telefono } };
    editarContacto(contactoUpdated, onClose);
    event.preventDefault();
  };

  return (
    <Modal show={mostrarForma} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>Editar Contacto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {renderForm(handleSave, onClose)}
      </Modal.Body>
    </Modal>
  );

};

const renderForm = (handleSave, onClose) => {
  return (
    <Form onSubmit={handleSave}>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Nuevo Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTelefono">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="phone" placeholder="442-987-6677" />
      </Form.Group>

      <Button variant="primary" type="submit" value="submit" style={{margin: "0.5rem"}}>
        Submit
      </Button>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Form>
  );
}

export default ContactoEditar;



