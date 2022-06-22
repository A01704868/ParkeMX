import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import UsuarioEditar from "./UsuarioEditar";
import UsuarioAgregar from "./UsuarioAgregar";
import UsuarioBorrar from "./UsuarioBorrar";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";
import BarraNav from "./BarraNav";
import Footer from "./Footer";


const usuarioUrl = "http://159.223.174.63:4000/api/users";

const Usuario = () => {
    const [usuarioData, setUsuarioData] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editIsOpen, setEditIsOpen] = useState(false);
    const [addIsOpen, setAddIsOpen] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState(-1);
    const [usuarioWasUpdated, setUsuarioWasUpdated] = useState(false);

    useEffect(() => {
        const getUsuarios = () => {
            axios
                .get(`${usuarioUrl}/all`, { withCredentials: true })
                .then(({ data }) => {
                    if (data && data.users) {
                        setUsuarioData(data.users);
                    }
                })
                .catch((e) => console.error(e));
        };

        getUsuarios();
    }, [usuarioWasUpdated]);

    const onDelete = (usuarioId) => {
        setIsDialogOpen(false);
        setUsuarioData(usuarioData.filter(u => u.id !== usuarioId));
    };

    const onEditClosed = () => {
        setEditIsOpen(false);
        setUsuarioWasUpdated(!usuarioWasUpdated);
    };

    const onAddClosed = () => {
        setAddIsOpen(false);
        setUsuarioWasUpdated(!usuarioWasUpdated);
    };

    const borrarContacto = (usuarioId) => {
        if (usuarioId === null || usuarioId === undefined) {
            return;
        }

        setUserToUpdate(usuarioId);
        setIsDialogOpen(true);
    };

    const editarContacto = (usuarioId) => {
        if (usuarioId === null || usuarioId === undefined) {
            return;
        }

        setUserToUpdate(usuarioId);
        setEditIsOpen(true);
    };

    return (
        <>
            <div>
                <RBACWrapper requiredRoles={[AppRoles.ADMIN]}>
                <BarraNav />
                
                <h2>Usuario</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Borrar</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarioData.map((usuario, index) =>
                            <tr key={index}>
                                <td>{usuario.name}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.role === 1 ? "Admin" : "User"}</td>
                                <td>
                                    <Icon.Trash
                                        color={usuario.id ? "red" : "grey"}
                                        title="Borrar Contacto"
                                        style={{ cursor: usuario.id ? "pointer" : "initial" }}
                                        onClick={usuario.role === 0 ? () => borrarContacto(usuario.id) : null}
                                    />
                                </td>   
                                <td>
                                    <Icon.PencilFill
                                        title="Editar Contacto"
                                        color={usuario.id ? "black" : "grey"}
                                        style={{ cursor: usuario.id ? "pointer" : "initial" }}
                                        onClick={() => editarContacto(usuario.id)}
                                    />
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                    <div id="boton">
                        <Button
                            style={{ width: "200px", maxWidth: "20vw", position: "relative", left: "52%" }}
                            onClick={() => setAddIsOpen(true)}
                            variant="success"
                            className="crear"
                        >
                            Agregar Usuario
                        </Button>
                    </div>
                    <Footer />
                </RBACWrapper>
            </div>
            <UsuarioAgregar
                mostrarForma={addIsOpen}
                onClose={onAddClosed}
            />
            <UsuarioBorrar
                id={userToUpdate}
                isOpen={isDialogOpen}
                onCancel={() => setIsDialogOpen(false)}
                onDelete={() => onDelete(userToUpdate)}
            />
            {usuarioData && usuarioData[userToUpdate] && <UsuarioEditar
                // userData={usuarioData[userToUpdate]}
                userData={null}
                mostrarForma={editIsOpen}
                onClose={onEditClosed}
            />}
        </>
    );
};

export default Usuario;
