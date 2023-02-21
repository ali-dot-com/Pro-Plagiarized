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
      <Navbar bg="light" expand="lg" variant="light">
        <Container className="">
          <img

            style={{ width: "10%", height: "auto", objectFit:"contain" }}
            src={Logo}
            alt="turnitinPro"
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
                <Link
                  exact
                  to="/"
                  className="text-decoration-none navbarlinks me-3 mt-2 px-2"
                >
                  <span style={{ color: "black" }}>Pricing</span>
                </Link>

                <Link
                  exact
                  to="/"
                  className="text-decoration-none navbarlinks me-3 mt-2 px-2"
                >
                  <span style={{ color: "black" }}>Features</span>
                </Link>

                <Link
                  exact
                  to="/"
                  className="text-decoration-none navbarlinks me-3 mt-2 px-2"
                >
                  <span style={{ color: "black" }}>How we work</span>
                </Link>
              
              
              <Link
                exact
                to="/"
                className="text-decoration-none navbarlinks btn btn-primary  mx-2 nav-btns text-light px-3 fw-semibold"
              >
                <span style={{ color: "white" }}>Log in</span>
              </Link>

              <Link
                exact
                to="/"
                className="text-decoration-none navbarlinks btn btn-primary  mx-2 nav-btns text-light px-3 fw-semibold"
              >
                <span style={{ color: "white" }}>Get Started</span>
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarLandingPage;
