import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import logotipo from "../assets/app-logo.svg";
import usericon from "../assets/avatar.svg";
import "../css/customStyles.css";
import { RBACWrapper } from "react-simple-rbac";
import { AppRoles } from "../App";

function BarraNav() {
  return (
    <Navbar className="color-nav" variante="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logotipo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="N/A"
          />
        </Navbar.Brand>

        <RBACWrapper requiredRoles={[AppRoles.ADMIN]}>
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Opciones"
                menuVariant="dark"
              >
                <NavDropdown.Item href={"/agregaranuncio"}>
                  Agregar Anuncio
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </RBACWrapper>

        <Navbar.Brand href="#login">
          <img
            src={usericon}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="N/A"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BarraNav;
