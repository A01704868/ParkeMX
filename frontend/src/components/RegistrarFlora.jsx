import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Row, Button, Modal, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { saveFloraPark } from "../services/index";
import BarraNav from "./BarraNav";
import Footer from "./Footer";
import axios from "axios";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";
import { urlInjector } from "../services/urlInjector";

function floraOpt(flora){
    return (
        <option value={flora.id}>{flora.nombre}</option>
    );
}

function RegistrarFlora(){

    const { id } = useParams();
    const [flora, setFlora] = useState([]);
    const [parque, setParque] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [modal2, showModal2] = useState(false);
    
    //Validar
  const [validated, setValidated] = useState(false);
  //Axios
  const [formValues, setFormValues] = useState({
    parqueId: id,
    floraId: null,
  });

  //Validar
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else if(formValues.floraId === null || formValues.floraId === "0"){
        handleShow();
    }else{
      setValidated(true);
    }

    if(validated){
        saveFloraPark({ ...formValues });
        showModal2(true);
    }
  };

    useEffect(() => {
    
        const getData = () => {
          const baseUrl = urlInjector();
          let promise1 = axios.get(`${baseUrl}/flora/${id}`);
          let promise2 = axios.get(
            `${baseUrl}/parques/parque/${id}`
          );
    
          Promise.all([promise1, promise2])
            .then((values) => {
              setFlora(values[0].data);
              setParque(values[1].data);
            })
            .catch((e) => console.log(e));
        };
    
        getData();
        // eslint-disable-next-line
      }, []);

      //Axios
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const continuar = () => {
      navigate('/parque/'+id);
    }

    return(
        <>
        <RBACWrapper requiredRoles={[AppRoles.ADMIN]} fallback={<Alert variant='danger'>No tienes el permiso de estar aqui. Regresa a la <Alert.Link href="/">pagina principal.</Alert.Link></Alert>}>
          <BarraNav />
          <Form noValidate onSubmit={handleSubmit}>
          <h1 className="h1-form">Registrar Flora al Parque:</h1>
          <h2 className="h1-form">{parque.nombre}</h2>
          <Row className="row justify-content-between">
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Select required aria-label="Default select example" name="floraId" value={formValues.floraId} onChange={handleChange}>
              <option value="0">Elige Flora a registrar</option>
              {flora.map(floraOpt)}
              </Form.Select>
            </Form.Group>
          </Row>

          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>No se puede agregar este valor</Modal.Title>
          </Modal.Header>
        </Modal>

          <Button type="submit" className="mb-4">
            Registrar
          </Button>
          </Form>
          <Footer />
        </RBACWrapper>

        <Modal show={modal2}>
        <Modal.Header>
          <Modal.Title>Flora agregada al parque exitosamente</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={() => continuar()}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );

}

export default RegistrarFlora;