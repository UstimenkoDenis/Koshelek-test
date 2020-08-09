import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
       
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                <Nav.Link className="d-inline p-2 bg-dark text-white"
                    href="/table">Table</Nav.Link>
                <Nav.Link className="d-inline p-2 bg-dark text-white"
                    href="/input">Input</Nav.Link>                           
                </Nav>             
            </Navbar.Collapse>
        </Navbar>
    )    
}

export default Navigation;
