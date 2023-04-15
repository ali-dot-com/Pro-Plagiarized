import "./AdminNav.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../../assets/logos/250x150.png";

const AdminNav = () => {
    return (
        <>
            <div>
                <Navbar className="Navbar mb-0 position-sticky" collapseOnSelect expand="lg" bg="white" variant="light"
                    style={{ zIndex: "20" }}>
                    <Container className="navContainer">
                        <img className="me-5 img-fluid" src={Logo} alt="" />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="mx-auto collapsibleNav">
                                {/* <p className="fw-bold text-danger my-auto px-3" href="#pricing">16 Credits left!</p> */}
                                {/* <Nav.Link className="hoverEffect fw-bold ms-3 me-3 px-3" id="hoverEffect" href="#feature">Buy Credits</Nav.Link> */}


                                <NavDropdown title="All Files" className="px-2 btn py-0 text-light btn text-center btn-light fw-bold navItemDropDown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.1">Remove</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.2">Detect</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-semibold text-primary text-fluid" href="#action/3.3">Returned</NavDropdown.Item>
                                </NavDropdown>


                                {/* <Nav.Link className=" fw-bold btn btn-light text-dark float-right px-3" id="" href="#feature">Abdul Qadeer</Nav.Link> */}
                                
                            </Nav>
                            <Nav>
                                {/* <Nav.Link className="btn btn-primary px-4 fw-bold me-1 mb-1" style={{ color: "#fff" }} href="#deets">Settings</Nav.Link> */}
                                {/* <Nav.Link className="btn btn-warning px-3 fw-semibold ms-3 mb-1 text-dark" style={{ color: "#fff" }} href="#memes">Abdul Qadeer</Nav.Link> */}
                                {/* <NavDropdown title="Dr. Bilal" className="px-4 py-0 text-light btn text-center btn-outline-warning fw-semibold navItemDropDown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item className="fw-semibold text-dark text-fluid" href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-semibold text-dark text-fluid" href="#action/3.2">Settings</NavDropdown.Item>
                                    <NavDropdown.Item className="fw-semibold text-dark text-fluid" href="#action/3.3">Log Out</NavDropdown.Item>
                                </NavDropdown> */}

                                <div class="container-fluid">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a
                                                class="nav-link dropdown-toggle"
                                                href="#"
                                                id="navbarDropdownMenuLink"
                                                role="button"
                                                data-mdb-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Dropdown link
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li>
                                                    <a class="dropdown-item" href="#">Action</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>

    );
};

export default AdminNav;
