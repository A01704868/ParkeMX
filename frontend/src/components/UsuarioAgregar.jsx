import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";
import { useState } from "react";
import { urlInjector } from "../services/urlInjector";

const baseUrl = urlInjector();
const usuarioUrl = `${baseUrl}/users`;
const agregarUsuario = (body, onAdded, onClose) => {
    if (!body) {
        return;
    }

    axios.post(`${usuarioUrl}/add`, body, { withCredentials: true })
        .then((res) => {
            if (res.status === 201) {
                onAdded().then(onClose).catch(onClose);
            }
        })
        .catch(onClose);
}

const defaultProps = {
    mostrarForma: false,
    onUserAdded: () => {},
    onClose: () => { }
};

const UsuarioAgregar = ({ mostrarForma, onClose, onUserAdded } = defaultProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(0);

    const onDismiss = () => {
        setName("");
        setEmail("");
        setRole(0);

        onClose();
    };

    const guardarUsuario = (event) => {
        if (!name || !email || !password || (role !== 0 && role !== 1)) {
            return;
        }

        const usuarioAdded = { user: { name, email, password, role } };
        agregarUsuario(usuarioAdded, onUserAdded, onDismiss);
        //event.preventDefault();
    };


    return (
        <Modal show={mostrarForma} onHide={onDismiss}>
            <Modal.Header>
                <Modal.Title>Agregar Usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <RBACWrapper requiredRoles={[AppRoles.ADMIN]}>
                    <Form onSubmit={guardarUsuario} style={{ margin: "10%", marginTop: "0%" }}>
                    <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="name"
                                onChange={({ target }) => setName(target.value)}
                                placeholder="Nuevo Nombre"
                                defaultValue={""}
                                typeof={typeof ""}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                onChange={({ target }) => setEmail(target.value)}
                                placeholder="ejemplo@gmail.com"
                                defaultValue={""}
                                typeof={typeof ""}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                onChange={({ target }) => setPassword(target.value)}
                                placeholder="***********"
                                defaultValue={""}
                                typeof={typeof ""}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Control
                                onChange={({ target }) => setRole(+target.value)}
                                defaultValue={0}
                                typeof={typeof 1}
                                as="select"
                            >
                                <option value={0}>USER</option>
                                <option value={1}>ADMIN</option>
                            </Form.Control>
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
            </Modal.Body>
        </Modal>
    );
};

export default UsuarioAgregar;



