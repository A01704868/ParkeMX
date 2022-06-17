import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import BarraNav from "./BarraNav";
import Footer from "./Footer";
import { saveFauna } from "../services/index";

function AgregarFauna() {
  //Validar
  const [validated, setValidated] = useState(false);
  //Axios
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  const inputFileRef = useRef();

  //Validar
  const handleSubmit = (event) => {
    // console.log(formValues);
    //console.log(inputFileRef.current.files);
    //handleSubmit({ ...formValues, image: inputFileRef.current.files[0] });
    console.log("FIRST: ", formValues);
    saveFauna({ ...formValues, image: inputFileRef.current.files[0] });
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  //Axios
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <BarraNav />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 class="h1-form">Agregar Nuevo Animal</h1>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre del Animal</Form.Label>
            <Form.Control
              required
              type="string"
              placeholder="Aguila"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              required
              type="string"
              placeholder="Muy grande"
              name="descripcion"
              value={formValues.descripcion}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Insertar imagen del animal</Form.Label>
              <Form.Control type="file" ref={inputFileRef} />
            </Form.Group>
            <Form.Control.Feedback type="invalid">
              Ingresa una ciudad valida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" className="mb-4">Agregar</Button>
      </Form>
      <Footer/>
    </div>
  );
}

export default AgregarFauna;
