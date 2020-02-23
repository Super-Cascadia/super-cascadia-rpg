import React from "react";
import {
    Link
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function TopNavigation () {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Super Cascadia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/items">Items</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/characters">Characters</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
