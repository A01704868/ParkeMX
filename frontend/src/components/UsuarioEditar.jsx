import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";
import { UserContext } from "./UsuarioLista";
import { useEffect } from "react";

const usuarioUrl = "http://localhost:4000/api/users";
const defaultProps = {
    mostrarForma: false,
    onClose: () => { },
    onUpdate: (user) => {}
};

const editarUsuario = (body = {}) => {
    if (!body) {
        return Promise.resolve(false);
    }

    return axios.put(`${usuarioUrl}/update`, body, { withCredentials: true })
        .then(res => {
            return res.status === 204;
        })
        .catch(_ => false);
}

const UsuarioEditar = ({ mostrarForma, onClose, onUpdate } = defaultProps) => {
    const { usuarioEditar } = useContext(UserContext);
    const {
        name: currentName,
        email: currentEmail,
        role: currentRole
    } = usuarioEditar;

    const [nombre, setNombre] = useState(currentName);
    const [email, setEmail] = useState(currentEmail);
    const [rol, setRol] = useState(currentRole);

    useEffect(() => {
        setTimeout(() => {
            setNombre(currentName);
            setEmail(currentEmail);
            setRol(currentRole);
        }, 10)
    }, [currentName, currentEmail, currentRole]);

    /** Callback a ejecutar cuando se cierra el modal */
    const onDismiss = () => {
        setNombre(currentName);
        setEmail(currentEmail);
        setRol(currentRole);

        
        onClose();
    };

    const guardarCambios = (event) => {
        if (!nombre || !email || (rol !== 0 && rol !== 1)) {
            return;
        }

        const user = {
            ...usuarioEditar,
            name: nombre,
            email: email,
            role: rol
        };

        event.preventDefault();
        editarUsuario({ user })
            .then(wasUpdated => {
                if (wasUpdated) {
                    onUpdate(user);
                }
                onDismiss();
            })
            .catch(_ => {
                onDismiss();
            });

    };

    if (!usuarioEditar) {
        return null;
    }

    return (
        <RBACWrapper requiredRoles={[AppRoles.ADMIN]}>
            <Modal show={mostrarForma} onHide={onDismiss}>
                <Modal.Header>
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={guardarCambios} style={{ margin: "10%", marginTop: "0%" }}>
                        <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="name"
                                onChange={({ target }) => setNombre(target.value)}
                                placeholder="Nuevo Nombre"
                                defaultValue={currentName}
                                typeof={typeof ""}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                onChange={({ target }) => setEmail(target.value)}
                                placeholder="ejemplo@gmail.com"
                                defaultValue={currentEmail}
                                typeof={typeof ""}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Control
                                onChange={({ target }) => setRol(+target.value)}
                                defaultValue={currentRole}
                                typeof={typeof 1}
                                as="select"
                            >
                                <option value={0}>USER</option>
                                <option value={1}>ADMIN</option>
                            </Form.Control>
                        </Form.Group>

                        <div style={{ display: "flex", gap: "5px" }}>
                            <Button variant="primary" type="submit" value="submit">
                                Actualizar
                            </Button>
                            <Button variant="secondary" onClick={onDismiss}>
                                Cerrar
                            </Button>
                        </div>

                    </Form>
                </Modal.Body>
            </Modal>
        </RBACWrapper>
    );
};

export default UsuarioEditar;