import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import TimePicker from "react-bootstrap-time-picker";
import BarraNav from "./BarraNav";

function AgregarParque() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <BarraNav />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 class="h1-form">Agregar Nuevo Parque</h1>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre del Parque</Form.Label>
            <Form.Control required type="string" placeholder="Parque" />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control required type="string" placeholder="Ubicado en ..." />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Latitud</Form.Label>
            <Form.Control required type="text" placeholder="Ubicado en ..." />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Direccion</Form.Label>
            <Form.Control required type="string" placeholder="Calle.." />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Longitud</Form.Label>
            <Form.Control required type="float" placeholder="-15151." />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Fecha Decreto</Form.Label>
            <Form.Control required type="string" placeholder="1992/02/05" />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Superficie Terrestre</Form.Label>
            <Form.Control required type="float" placeholder="-15151." />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Superficie Marina</Form.Label>
            <Form.Control required type="float" placeholder="-15151." />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Insertar imagen parque</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Ingresa una ciudad valida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Agregar</Button>
      </Form>
    </div>
  );
}

export default AgregarParque;
