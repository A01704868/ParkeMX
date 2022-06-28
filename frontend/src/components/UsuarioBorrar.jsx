import axios from "axios";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { UserContext } from "./UsuarioLista"
import "../css/customStyles.css";
import { urlInjector } from "../services/urlInjector";

const defaultProps = {
    isOpen: false,
    onCancel: () => {},
    onDelete: () => {}
};

/**
 * Componente para borrar un contacto
 */
const UsuarioBorrar = ({ isOpen, onCancel, onDelete } = defaultProps) => {
    const baseUrl = urlInjector();
    const usuarioUrl = `${baseUrl}/users`;
    const { usuarioEditar } = useContext(UserContext);
    const { id } = usuarioEditar;

    const borrarContacto = () => {
        if (id === null || id === undefined) {
            return;
        }

        axios
            .delete(`${usuarioUrl}/delete/${id}`, { withCredentials: true })
            .then(onDelete)
            .catch(onCancel);
    };

    if (!isOpen || id === undefined || id === null) {
        return null;
    }

    return (
        <Modal.Dialog
            className="modalStyle"
            id="modalBorrar"
        >
            <Modal.Header>
                <Modal.Title>Borrar Usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Estás seguro que quieres borrar el usuario?</p>
            </Modal.Body>

            <Modal.Footer style={{ flexWrap: "nowrap" }}>
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={borrarContacto}>
                    Borrar
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
};

export default UsuarioBorrar;