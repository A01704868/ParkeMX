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
            <Form.Control required type="text" placeholder="Parque" />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Horario Entrada</Form.Label>
            <TimePicker start="10:00" end="21:00" step={30} />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Horario Salida</Form.Label>
            <TimePicker start="10:00" end="21:00" step={30} />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ciudad" required />
            <Form.Control.Feedback type="invalid">
              Ingresa una ciudad valida.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" placeholder="Estado" required />
            <Form.Control.Feedback type="invalid">
              Ingresa un estado valido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Actividades</Form.Label>
            <Form.Check required label="Senderismo" />
            <Form.Check required label="Bicicleta" />
            <Form.Check required label="Acampe" />
            <Form.Check required label="Fotografia" />
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Insertar imagen principal</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Ingresa una ciudad valida.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Flora</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Ingresa un estado valido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Agregar</Button>
      </Form>
    </div>
  );
}

export default AgregarParque;
