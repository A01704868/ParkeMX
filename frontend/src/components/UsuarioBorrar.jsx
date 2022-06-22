import axios from "axios";
import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { UserContext } from "./UsuarioLista"

const defaultProps = {
    isOpen: false,
    onCancel: () => {},
    onDelete: () => {}
};

/**
 * Componente para borrar un contacto
 */
const UsuarioBorrar = ({ isOpen, onCancel, onDelete } = defaultProps) => {
    const usuarioUrl = "http://159.223.174.63:4000/api/users";
    const { usuarioEditar, setUsuarioEditar } = useContext(UserContext);
    const { id } = usuarioEditar;

    const borrarContacto = () => {
        if (id === null || id === undefined) {
            return;
        }

        axios
            .delete(`${usuarioUrl}/delete/${id}`, { withCredentials: true })
            .then((_) => {
                setUsuarioEditar(undefined);
                onDelete();
            })
            .catch((err) => alert(err));
    };

    if (!isOpen || id === undefined || id === null) {
        return null;
    }

    return (
        <Modal.Dialog style={{ zIndex: 900, boxShadow: "4px 4px 4px grey" }}>
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