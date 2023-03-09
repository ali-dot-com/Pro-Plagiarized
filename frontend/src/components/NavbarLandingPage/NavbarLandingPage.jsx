import "./navbarlandingpage.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Logo.png";


const NavbarLandingPage = () => {
  return (
    <div>
    <Navbar className="Navbar" collapseOnSelect expand="lg" bg="white" variant="light"
    >
      <Container className="navContainer">
        <img className="me-5" src={Logo} alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="fw-bold text-dark nav-link-item px-3" href="#pricing">Pricing</Nav.Link>
            <Nav.Link className="fw-bold text-dark nav-link-item px-3" href="#feature">Feature</Nav.Link>
            <Nav.Link className="fw-bold text-dark nav-link-item px-3" href="#howwework">How we work?</Nav.Link>

              <NavDropdown title="About Us" className="navDropdown fw-bold" id="collasible-nav-dropdown">
              <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.1">Guarantees</NavDropdown.Item>
              <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.2">FAQs</NavDropdown.Item>
              <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.3">Feedback</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="btn btn-primary px-4 fw-bold me-1 mb-1" style={{color:"#fff"}} href="#deets">Log In</Nav.Link>
            <Nav.Link className="btn btn-warning px-4 fw-bold ms-3 text-dark heartbeat mb-1" style={{color:"#fff"}} href="#memes">New Here?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavbarLandingPage;
