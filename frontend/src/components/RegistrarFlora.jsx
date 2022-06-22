import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Form, Row, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { saveFloraPark } from "../services/index";
import BarraNav from "./BarraNav";
import Footer from "./Footer";
import axios from "axios";

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
        document.location.href="/parque/"+id;
    }
  };

    useEffect(() => {
    
        const getData = () => {
          let promise1 = axios.get("http://159.223.174.63:4000/api/flora/"+id);
          let promise2 = axios.get(
            "http://159.223.174.63:4000/api/parques/parque/" + id
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



    return(
        <>
        <BarraNav />
        <Form noValidate onSubmit={handleSubmit}>
        <h1 class="h1-form">Registrar Flora al Parque:</h1>
        <h2 class="h1-form">{parque.nombre}</h2>
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
        </>
    );

}

export default RegistrarFlora;