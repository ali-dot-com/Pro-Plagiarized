import "./navbarlandingpage.css";

import React from "react";
import { Link } from "react-router-dom";

/*React-Bootstrap Libs for NavBar*/
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Logo.png";
import { Row } from "react-bootstrap";
const NavbarLandingPage = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <img style={{ width: "10%", objectFit:"contain"}} className="me-5" src={Logo} alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Feature</Nav.Link>
            <Nav.Link href="#pricing">How we work</Nav.Link>

            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Nav>
            <Nav.Link className="btn btn-primary me-1 mb-1" style={{color:"#fff"}} href="#deets">Log In</Nav.Link>
            <Nav.Link className="btn btn-primary me-1 mb-1" style={{color:"#fff"}} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarLandingPage;
