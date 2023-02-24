import "./navbarlandingpage.css";

import React from "react";
import { Link } from "react-router-dom";

/*React-Bootstrap Libs for NavBar*/
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Logo.png";
const NavbarLandingPage = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="">
        <Container className="nav-container px-5">
          <img style={{ width: "10%", height: "auto", objectFit:"contain" }} src={Logo} alt="turnitinPro" />

          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <div className="mainNav">

                <Link exact to="/" className="text-decoration-none navbarlinks me-3 px-2">
                  <span style={{ color: "black" }}>Pricing</span>
                </Link>

                <Link exact to="/" className="text-decoration-none navbarlinks me-3 px-2">
                  <span style={{ color: "black" }}>Features</span>
                </Link>

                <Link exact to="/" className="text-decoration-none navbarlinks me-3 px-2">
                  <span style={{ color: "black" }}>How we work?</span>
                </Link>

                <div className="nav-right-btns">
                  <Link exact to="/" className="text-decoration-none navbarlinks btn btn-primary mx-2 nav-btns text-light px-3 fw-bold">
                    <span style={{ color: "white" }}>Log in</span>
                  </Link>

                  <Link exact to="/" className="text-decoration-none btn btn-light mx-2 nav-btns px-4 fw-bold">
                    <span style={{ color: "" }}>Get Started</span>
                  </Link>

                </div>

              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarLandingPage;
