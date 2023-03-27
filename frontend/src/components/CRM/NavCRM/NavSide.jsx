import "./sideNav.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../../assets/150x90.png";

const NavSidePanel = () => {
    return (
        <>
            <div>
                <Navbar className="Navbar mb-0 position-sticky" collapseOnSelect expand="lg" bg="white" variant="light"
                style={{zIndex : "20"}}>
                    <Container className="navContainer">
                        <img className="me-5" src={Logo} alt="" />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <p className="fw-bold text-danger my-auto nav--item px-3" href="#pricing">16 Credits left!</p>
                                <Nav.Link className="hoverEffect fw-bold ms-3 me-3 px-3" id="hoverEffect" href="#feature">Buy Credits</Nav.Link>
                                <NavDropdown title="About Us" className="px-2 py-0 btn btn-light fw-bold" id="collasible-nav-dropdown">
                                    {/* <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.1">Contact Us</NavDropdown.Item> */}
                                    <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.1">Guarantees</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.2">FAQs</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.3">Feedback</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className=" fw-bold btn btn-light text-dark ms-3 px-3" id="" href="#feature">Contact Us</Nav.Link>


                            </Nav>
                            {/* <Nav>
                                <Nav.Link className="btn btn-primary px-4 fw-bold me-1 mb-1" style={{ color: "#fff" }} href="#deets">Settings</Nav.Link>
                                <Nav.Link className="btn btn-warning px-3 fw-semibold ms-3 mb-1 text-dark" style={{ color: "#fff" }} href="#memes">Log Out</Nav.Link>
                            </Nav> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>




    );
};

export default NavSidePanel;
