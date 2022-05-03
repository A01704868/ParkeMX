import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AgregarParque = () => (
  <div className="App m-0 row justify-content-center">
    <div class="row-cols-lg-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del parque</Form.Label>
          <Form.Control type="string" placeholder="Nombre del parque" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="string" placeholder="Direccion" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Horario</Form.Label>
          <Form.Control type="string" placeholder="Horario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Estacionamiento</Form.Label>
          <Form.Control type="string" placeholder="Estacionamiento" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Actividad 1" />
          <Form.Check type="checkbox" label="Actividad 2" />
          <Form.Check type="checkbox" label="Actividad 3" />
          <Form.Check type="checkbox" label="Actividad 4" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Imagen del parque</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </div>
  </div>
);

export default AgregarParque;
