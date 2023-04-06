import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../Style/Navbar.css'

function NavigationBar() {
  return (
    <>
      <Navbar id='navbar' expand="lg">
        <Container>
          <Navbar.Brand id='brand' href="#home">Tripma</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="links" href="#home">Tripma</Nav.Link>
              <Nav.Link className="links" href="#link">Flights</Nav.Link>
              <Nav.Link className="links" href="#home">Hotels</Nav.Link>
              <Nav.Link className="links" href="#link">Packages</Nav.Link>
              <Nav.Link className="links" href="#link">Signin</Nav.Link>
              <Button className="nav-button">
                <a href="" className="text-decoration-none text-light">
                  Signup
                </a>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
