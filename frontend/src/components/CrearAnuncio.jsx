import axios from "axios";
import BarraNav from './BarraNav';
import Footer from './Footer';
import React, {useState, useEffect} from "react";
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";
import { urlInjector } from "../services/urlInjector";

function dynamoOpt(parque){
    return (
        <option key={parque.id} value={parque.id}>{parque.nombre}</option>
    );
}

function CrearAnuncio(){

    const [parques, setParques] = useState([]);

    const navigate = useNavigate();
    const [modal, showModal] = useState(false);

    useEffect(() => {
    
        const getData = () => {
            const baseUrl = urlInjector();
          let promise1 = axios.get(`${baseUrl}/parques`);
    
          Promise.all([promise1])
            .then((values) => {
              setParques(values[0].data);
            })
            .catch((e) => console.log(e));
        };
    
        getData();
        // eslint-disable-next-line
      }, []);

    //state variable
    const [data, setData] = useState({
        titulo: "",
        descripcion: "",
        variante: "",
        parqueId: ""
    });

    async function submit(e){
        e.preventDefault();
        try{
            const baseUrl = urlInjector();
            await axios.post(`${baseUrl}/parques/anuncio`, {
                titulo: data.titulo,
                descripcion: data.descripcion,
                variante: data.variante,
                parqueId: data.parqueId
            });
            showModal(true);
        }catch(error){
            console.log(error.response);
        }
    }

    function handle(e){
        const newData={...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    const continuar = () => {
        showModal(false);
        navigate('/parque/'+data.parqueId);
      }
    return (
        <>
        <RBACWrapper requiredRoles={[AppRoles.ADMIN]} fallback={<Alert variant='danger'>No tienes el permiso de estar aqui. Regresa a la <Alert.Link href="/">pagina principal.</Alert.Link></Alert>}>
            <BarraNav />

            <h1 className="h1-form">Agregar Anuncio</h1>
            <Form onSubmit={(e)=>submit(e)}>
            <Form.Group className="mb-3">
                <Form.Label>Titulo</Form.Label>
                <Form.Control required onChange={(e) => handle(e)} value={data.titulo} id="titulo" type="text" placeholder="Titulo del Anuncio" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control required as="textarea" rows={3} onChange={(e) => handle(e)} value={data.descripcion} id="descripcion" type="text" placeholder="Descripcion detallada" />
            </Form.Group>

            <Form.Select required aria-label="Default select example" onChange={(e) => handle(e)} value={data.variante} id="variante">
                <option>Elige opcion de anuncio</option>
                <option value="success">Notificacion</option>
                <option value="danger">Alerta</option>
                <option value="warning">Advertencia</option>
            </Form.Select>

            <br/>

            <Form.Select required aria-label="Default select example" onChange={(e) => handle(e)} value={data.parqueId} id="parqueId">
                <option value="0">Elige un parque a cual mandarle el anuncio</option>
                {parques.map(dynamoOpt)}
            </Form.Select>


            <Button variant="primary" type="submit" className="mb-4">
                Submit
            </Button>
            </Form>
            <Footer/>
        </RBACWrapper>


        <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>El anuncio se creo exitosamente</Modal.Title>
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


export default CrearAnuncio;
