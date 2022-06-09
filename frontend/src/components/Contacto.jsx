import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Alert, Table, Modal, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";

// const props = { id, nombre, telefono }
// const { id, nombre, telefono } = props;
const contactoUrl = "http://localhost:4000/api/encargado";

const Contacto = ({ id }) => {
  const [contactoData, setContactoData] = useState({
    id: undefined,
    nombre: "No hay datos disponibles",
    telefono: "No hay datos disponibles",
    parqueId: undefined,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const getContacto = () => {
      if (id === null || id === undefined) {
        return;
      }

      axios
        .get(`${contactoUrl}/read/${id}`)
        .then((encargado) => {
          if (encargado && encargado.data) {
            setContactoData(encargado.data);
          }
        })
        .catch((e) => console.error(e));
    };

    getContacto();
  }, [id]);

  if (id === null || id === undefined) {
    return <Alert variant="danger">No hay información disponible</Alert>;
  }

  console.log(id);

  const onDelete = () => {
    setIsDialogOpen(false);
    setContactoData({
      id: undefined,
      nombre: "No hay datos disponibles",
      telefono: "No hay datos disponibles",
      parqueId: 0,
    });
  };

  return (
    <>
      <h2>Contacto</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{contactoData.nombre}</td>
            <td>{contactoData.telefono}</td>
            <td>
              <Icon.Trash
                color="red"
                title="Borrar Contacto"
                style={{ cursor: "pointer" }}
                onClick={() => setIsDialogOpen(true)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <DialogoBorrar
        id={contactoData.id}
        isOpen={isDialogOpen}
        onCancel={() => setIsDialogOpen(false)}
        onDelete={onDelete}
      />
    </>
  );
};

const DialogoBorrar = ({ id, isOpen, onCancel, onDelete }) => {
  const borrarContacto = () => {
    if (id === null || id === undefined) {
      return;
    }

    axios
      .delete(`${contactoUrl}/delete/${id}`)
      .then((res) => {
        onDelete && onDelete();
      })
      .catch((err) => alert(err));
  };

  if (!isOpen || id === undefined || id === null) {
    return null;
  }

  return (
    <Modal.Dialog style={{ zIndex: 900, boxShadow: "4px 4px 4px grey" }}>
      <Modal.Header>
        <Modal.Title>Borrar Contacto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Estás seguro que quieres borrar el contacto?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => onCancel && onCancel()}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={borrarContacto}>
          Borrar
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Contacto;
