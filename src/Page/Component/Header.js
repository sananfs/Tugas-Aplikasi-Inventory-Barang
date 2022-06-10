import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "../../Css/Header.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar id="homepage" className="navbar" collapseOnSelect expand="lg" variant="light">
          <Container>
            <Navbar.Brand className="mr-4" href="/">
              TaskPEN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link className="mr-5" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="mr-5" href="/product">
                  Product
                </Nav.Link>
                <Nav.Link className="mr-5" href="/about">
                  About
                </Nav.Link>
              </Nav>
              <Button variant="info" className="button navbtn" href="/login">
                Login
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
