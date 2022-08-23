import React from "react";
import { Form, Col, Row, Button, Alert, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import BarraNav from "./BarraNav";
import Footer from "./Footer";
import { savePark } from "../services/index";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";
import { useNavigate } from 'react-router-dom';

function AgregarParque() {
  //Validar
  const [validated, setValidated] = useState(false);
  const [modal, showModal] = useState(false);
  const navigate = useNavigate();
  //Axios
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    direccion: "",
    latitud: "",
    longitud: "",
    fechaDecreto: "",
    superficieTerrestre: "",
    superficieMarina: "",
  });

  //Validar
  const handleSubmit = (event) => {

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      setValidated(true);
    }

    if(validated){
      savePark({ ...formValues /*, image: inputFileRef.current.files[0]*/ });
      showModal(true);
    }
  };
  //Axios
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const continuar = () => {
    showModal(false);
    navigate('/');
  }

  return (
    <div>
      <RBACWrapper requiredRoles={[AppRoles.ADMIN]} fallback={<Alert variant='danger'>No tienes el permiso de estar aqui. Regresa a la <Alert.Link href="/">pagina principal.</Alert.Link></Alert>}>
        <BarraNav />
        <Form required noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 className="h1-form">Agregar Nuevo Parque</h1>
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
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                required
                type="string"
                placeholder="Ubicado en ..."
                name="descripcion"
                value={formValues.descripcion}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Listo!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="row justify-content-between">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Latitud</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="65165"
                name="latitud"
                value={formValues.latitud}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Listo!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
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
            <Form.Group as={Col} md="4" controlId="validationCustom05">
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
            <Form.Group as={Col} md="4" controlId="validationCustom06">
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
            <Form.Group as={Col} md="4" controlId="validationCustom07">
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
            <Form.Group as={Col} md="4" controlId="validationCustom08">
              <Form.Label>Superficie Marina</Form.Label>
              <Form.Control
                required="required"
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
            <Form.Group as={Col} md="4" controlId="validationCustom09">
              <Form.Label>Inserta Url de imagen</Form.Label>
              <Form.Control
                required="required"
                type="string"
                placeholder="http:...."
                name="imagen"
                value={formValues.imagen}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Listo!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" className="mb-4">
            Agregar
          </Button>
        </Form>
        <Footer />
      </RBACWrapper>

      <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>El parque se creo exitosamente</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={() => continuar()}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AgregarParque;
