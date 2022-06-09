import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import BarraNav from "./BarraNav";
import { savePark } from "../services/index";

function AgregarParque() {
  //Validar
  const [validated, setValidated] = useState(false);
  //Axios
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
    imagen: "Bah_a_de_Loreto.jpg",
    direccion: "",
    latitud: 0.0,
    longitud: 0.0,
    fechaDecreto: "",
    superficieTerrestre: 0.0,
    superficieMarina: 0.0,
  });

  const inputFileRef = useRef();

  //Validar
  const handleSubmit = (event) => {
    // console.log(formValues);
    //console.log(inputFileRef.current.files);
    //handleSubmit({ ...formValues, image: inputFileRef.current.files[0] });
    console.log("FIRST: ", formValues);
    savePark({ ...formValues, image: inputFileRef.current.files[0] });
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
        <h1 class="h1-form">Agregar Nuevo Parque</h1>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre del Parque</Form.Label>
            <Form.Control
              required
              type="string"
              placeholder="Parque"
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
              placeholder="notas"
              name="descripcion"
              value={formValues.descripcion}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Latitud</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ubicado en ..."
              name="latitud"
              value={formValues.latitud}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              required
              type="string"
              placeholder="Calle.."
              name="direccion"
              value={formValues.direccion}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Longitud</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="-15151."
              name="longitud"
              value={formValues.longitud}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Fecha Decreto</Form.Label>
            <Form.Control
              required
              type="string"
              placeholder="1992/02/05"
              name="fechaDecreto"
              value={formValues.fechaDecreto}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Superficie Terrestre</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="-15151."
              name="superficieTerrestre"
              value={formValues.superficieTerrestre}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Superficie Marina</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="-15151."
              name="superficieMarina"
              value={formValues.superficieMarina}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Listo!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="row justify-content-between">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Insertar imagen parque</Form.Label>
              <Form.Control type="file" ref={inputFileRef} />
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
