import React from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { AppRoles } from "../App";
import BarraNav from "./BarraNav";
import Footer from "./Footer";
import UsuarioAgregar from "./UsuarioAgregar";
import UsuarioEditar from "./UsuarioEditar";
import UsuarioBorrar from "./UsuarioBorrar";
import { RBACWrapper } from "react-simple-rbac";
import * as Icon from "react-bootstrap-icons";

const usuarioDefault = { id: -1, name: "", email: "", role: 0 };
const listaDefault = [usuarioDefault];
export const UserContext = React.createContext({
    setListaUsuarios: (nuevaLista = listaDefault) => {},
    setUsuarioEditar: (usuario = usuarioDefault) => {},
    usuarioEditar: usuarioDefault,
    listaUsuarios: listaDefault
});



export default class UsuarioLista extends React.Component {
    usuarioUrl = "http://localhost:4000/api/users";

    constructor (props) {
        super(props);
        this.state = {
            listaUsuarios: listaDefault,
            mostrarAgregar: false,
            mostrarEditar: false,
            mostrarBorrar: false,
            usuarioEditar: usuarioDefault,
            setUsuarioEditar: this.setUsuarioEditar,
            setListaUsuarios: this.setListaUsuarios
        };
    }

    async cargarListaUsuarios () {
        const response = await axios.get(`${this.usuarioUrl}/all`, {
            withCredentials: true
        });

        if (response.status === 200 && response.data) {
            const { users } = response.data;
            this.setState({ listaUsuarios: users ?? listaDefault });
        }
    }

    async componentDidMount () {
        await this.cargarListaUsuarios();
    }

    setListaUsuarios (usuarios = listaDefault) {
        this.setState({ listaUsuarios: usuarios })
    };

    eliminarUsuario = (usuario = usuarioDefault) => {
        const { listaUsuarios } = this.state;
        const nuevaLista = listaUsuarios.filter((u) => {
            return u.id === usuario.id
        });

        this.setState({ listaUsuarios: nuevaLista });
    }

    actualizarUsuario = (usuario = usuarioDefault) => {
        const { listaUsuarios } = this.state;
        const usuarioIdx = listaUsuarios.findIndex(u => {
            return u.id === usuario.id;
        });

        if (usuarioIdx !== -1) {
            listaUsuarios[usuarioIdx] = usuario;
        }

        this.setState({ listaUsuarios });
    }

    setUsuarioEditar (nuevoUsuario = usuarioDefault) {
        const { usuarioEditar } = this.state;
        this.setState({ usuarioEditar: { ...usuarioEditar, ...nuevoUsuario } });
    };

    toggleAgregar = () => {
        const { mostrarAgregar } = this.state;
        return this.setState({ mostrarAgregar: !mostrarAgregar });
    };
    toggleEditar = () => {
        const { mostrarEditar } = this.state;
        return this.setState({ mostrarEditar: !mostrarEditar });
    };
    toggleBorrar = () => {
        const { mostrarBorrar } = this.state;
        return this.setState({ mostrarBorrar: !mostrarBorrar });
    };

    render () {
        const {
            mostrarEditar,
            mostrarAgregar,
            mostrarBorrar
        } = this.state;

        return (
            <UserContext.Provider value={this.state}>
                <>
                    <RBACWrapper requiredRoles={[AppRoles.ADMIN]}>
                        <>
                            <BarraNav />
                            <h2>Usuario</h2>
                            {this.renderTablaUsuarios()}
                            {this.renderBotonAgregar()}
                            <Footer />
                        </>
                    </RBACWrapper>

                    <UsuarioAgregar
                        mostrarForma={mostrarAgregar}
                        onClose={this.toggleAgregar}
                    />
                    <UsuarioBorrar
                        isOpen={mostrarBorrar}
                        onCancel={this.toggleBorrar}
                        onDelete={this.toggleBorrar}
                    />
                    <UsuarioEditar
                        mostrarForma={mostrarEditar}
                        onClose={this.toggleEditar}
                        onUpdate={this.actualizarUsuario}
                    />
                </>
            </UserContext.Provider>
        );
    }

    onBorrarUsuario(index = -1) {
        const { listaUsuarios } = this.state;
        const nuevoUsuario = listaUsuarios[index];

        if (nuevoUsuario) {
            this.setState({ usuarioEditar: nuevoUsuario })
            this.toggleBorrar();
        }
    }

    onEditarUsuario(index = -1) {
        const { listaUsuarios } = this.state;
        const nuevoUsuario = listaUsuarios[index];

        if (nuevoUsuario) {
            this.setState({ usuarioEditar: nuevoUsuario })
            this.toggleEditar();
        }
    }

    renderTablaUsuarios () {
        const { listaUsuarios } = this.state;
        return (
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
                    {listaUsuarios.map(({ id, name, email, role }, index) =>
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{role === 1 ? "Admin" : "User"}</td>
                            <td>
                                <Icon.Trash
                                    color={id !== -1 ? "red" : "grey"}
                                    style={{ cursor: id ? "pointer" : "initial" }}
                                    onClick={() => this.onBorrarUsuario(index)}
                                />
                            </td>
                            <td>
                                <Icon.PencilFill
                                    color={id !== -1 ? "black" : "grey"}
                                    style={{ cursor: id ? "pointer" : "initial" }}
                                    onClick={() => this.onEditarUsuario(index)}
                                />
                            </td>
                        </tr>)}
                </tbody>
            </Table>
        );

    }

    renderBotonAgregar () {
        return (
            <div id="boton">
                <Button
                    style={{ width: "200px", maxWidth: "20vw", position: "relative", left: "52%" }}
                    onClick={this.toggleAgregar}
                    variant="success"
                    className="crear"
                >
                    Agregar Usuario
                </Button>
            </div>
        );
    }
}