import React from "react";
import { Form, Col, Row, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import BarraNav from "./BarraNav";
import Footer from "./Footer";
import { updatePark } from "../services/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";
import { urlInjector } from "../services/urlInjector";

function EditarParque() {
  const { id } = useParams();

  // eslint-disable-next-line
  const [parque, setParque] = useState({});
  let [formValues, setFormValues] = useState({});

  useEffect(() => {
    const getData = async () => {
      const baseUrl = urlInjector();
      let promise1 = await axios.get(
        `${baseUrl}/parques/parque/${id}`
      );

      Promise.all([promise1])
        .then((values) => {
          setParque(values[0].data);
          setFormValues(values[0].data);
        })
        .catch((e) => console.log(e));
    };

    getData();
  }, [id]);
  //Validar
  const [validated, setValidated] = useState(false);
  //Axios

  //const inputFileRef = useRef();

  //Validar
  const handleSubmit = (event) => {
    // console.log(formValues);
    //console.log(inputFileRef.current.files);
    //handleSubmit({ ...formValues, image: inputFileRef.current.files[0] });
    updatePark({ ...formValues /*, image: inputFileRef.current.files[0]*/ });
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      setValidated(true);
    }


    if(validated){
      updatePark({ ...formValues /*, image: inputFileRef.current.files[0]*/ });
      document.location.href="/";
    }

    
  };
  //Axios
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <RBACWrapper requiredRoles={[AppRoles.ADMIN]} fallback={<Alert variant='danger'>No tienes el permiso de estar aqui. Regresa a la <Alert.Link href="/">pagina principal.</Alert.Link></Alert>}>
        <BarraNav />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1 class="h1-form">Editar Parque</h1>
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
                placeholder="Ubicado en ..."
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
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Inserta Url de imagen</Form.Label>
              <Form.Control
                required
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
            Guardar
          </Button>
        </Form>
        <Footer />
      </RBACWrapper>
    </div>
  );
}

export default EditarParque;
