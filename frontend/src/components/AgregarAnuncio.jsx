import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
//import TimePicker from "react-bootstrap-time-picker";
import BarraNav from "./BarraNav";
import { saveAnuncio } from "../services/index";

function AgregarAnuncio() {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    descripcion: "",
    parqueId: "",
  });

  const handleSubmit = (event) => {
    saveAnuncio({ ...formValues });
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <BarraNav />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 class="h1-form">Agregar Anuncio</h1>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              required
              type="string"
              placeholder="Esta ruta esta compuesta por..."
              name="descripcion"
              value={formValues.descripcion}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>id parque</Form.Label>
            <Form.Select
              aria-label="Default select example"
              required
              type="number"
              placeholder="Id del parque"
              name="parqueId"
              value={(formValues.parqueId = 18)}
              onChange={handleChange}
            >
              <option>Parques</option>
              <option value="1">Arrecifes de Cozumel</option>
              <option value="2">
                Alto Golfo de California y Delta del Río Colorado
              </option>
              <option value="3">Arrecife de Puerto Morelos</option>
              <option value="4">Arrecife Alacranes</option>
              <option value="5">El Cimatario</option>
              <option value="6">Arrecifes de Sian Ka'an</option>
              <option value="21">Cabo Pulmo</option>
              <option value="22">Bahia de Loreto</option>
            </Form.Select>
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Agregar</Button>
      </Form>
    </div>
  );
}

export default AgregarAnuncio;
