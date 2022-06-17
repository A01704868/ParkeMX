import axios from "axios";
import BarraNav from './BarraNav';
import Footer from './Footer';
import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';

function CrearAnuncio(){

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
            const response = await axios.post('http://localhost:4000/api/parques/anuncio', {
                titulo: data.titulo,
                descripcion: data.descripcion,
                variante: data.variante,
                parqueId: data.parqueId
            });
            console.log(response.data);
        }catch(error){
            console.log(error.response);
        }
    }

    function handle(e){
        const newData={...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }
    return (
        <>
        <BarraNav />

        <Form onSubmit={(e)=>submit(e)}>
        <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control onChange={(e) => handle(e)} value={data.titulo} id="titulo" type="text" placeholder="Titulo del Anuncio" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => handle(e)} value={data.descripcion} id="descripcion" type="text" placeholder="Descripcion detallada" />
        </Form.Group>

        <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.variante} id="variante">
            <option>Elige opcion de anuncio</option>
            <option value="success">Notificacion</option>
            <option value="danger">Alerta</option>
            <option value="warning">Advertencia</option>
        </Form.Select>

        <br/>

        <Form.Select aria-label="Default select example" onChange={(e) => handle(e)} value={data.parqueId} id="parqueId">
            <option>Elige un parque a cual mandarle el anuncio</option>
            <option value="6">El Cimatario</option>
            <option value="2">Arrecife Alacranes</option>
            <option value="4">Arrecifes de Cozumel</option>
        </Form.Select>


        <Button variant="primary" type="submit" className="mb-4">
            Submit
        </Button>
        </Form>
        <Footer/>
        </>
    );
}


export default CrearAnuncio;
