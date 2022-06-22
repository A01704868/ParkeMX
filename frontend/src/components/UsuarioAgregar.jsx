import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";

const usuarioUrl = "http://localhost:4000/api/users";
const agregarUsuario = (usuario, onClose) => {
    if (!usuario) {
        return;
    }

    axios.post(`${usuarioUrl}/add`, usuario, { withCredentials: true })
        .then(onClose)
        .catch(onClose);
}

const defaultProps = {
    mostrarForma: false,
    onClose: () => {}
};

const UsuarioAgregar = ({ mostrarForma, onClose } = defaultProps) => {
    const guardarUsuario = (event) => {
        const [nombreField, emailField, passwordField, roleField] = event.target;
        const nombre = nombreField.value ?? "";
        const email = emailField.value ?? "";
        const password = passwordField.value ?? "";
        const role = roleField.value ?? "";

        if (!nombre || !email || !password || !role) {
            return;
        }

        const usuarioAdded = { usuario: { nombre, email, password, role } };
        agregarUsuario(usuarioAdded, onClose);
        event.preventDefault();
    };

    return (
        <Modal show={mostrarForma} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>Agregar Usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {renderForm(guardarUsuario, onClose)}
            </Modal.Body>
        </Modal>
    );

};

const renderForm = (guardarUsuario, onClose) => {
    return (
        <RBACWrapper requiredRoles={[AppRoles.ADMIN]}>
        <Form onSubmit={guardarUsuario} style={{margin: "10%", marginTop: "0%"}}>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="name" placeholder="Nuevo Nombre" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ejemplo@gmail.com" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="text" placeholder="***********" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Rol</Form.Label>
                <Form.Select >
                    <option>USER</option>
                    <option>ADMIN</option>
                </Form.Select>
            </Form.Group>

            <div style={{ display: "flex", gap: "5px" }}>
                <Button variant="primary" type="submit" value="submit">
                    Agregar
                </Button>
                <Button variant="secondary" onClick={onClose}>
                    Cerrar
                </Button>
            </div>
        </Form>
        </RBACWrapper>
    );
}

export default UsuarioAgregar;



