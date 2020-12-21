import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";

function AssetsDropdown() {
  return (
    <NavDropdown title="Assets" id="collasible-nav-dropdown" variant="dark">
      <LinkContainer to="/assets/icons">
        <NavDropdown.Item href="/assets">Icons</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item disabled={true} href="/assets">
        Portraits
      </NavDropdown.Item>
      <NavDropdown.Item disabled={true} href="/assets">
        Enemies
      </NavDropdown.Item>
      <NavDropdown.Item disabled={true} href="/assets">
        Tiles
      </NavDropdown.Item>
    </NavDropdown>
  );
}

function ItemsDropdown() {
  return (
    <NavDropdown title="Items" id="collasible-nav-dropdown" variant="dark">
      <LinkContainer to="/items">
        <NavDropdown.Item href="/items">Items</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/items/v2">
        <NavDropdown.Item href="/items/v2">Items V2</NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  );
}

export default function TopNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/home">Super Cascadia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/characters">
            <Nav.Link>Characters</Nav.Link>
          </LinkContainer>
          <ItemsDropdown />
          <AssetsDropdown />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
