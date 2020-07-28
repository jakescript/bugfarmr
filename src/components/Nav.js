import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'


function MainNav() {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className="justify-content-end">
            <Container>
                <Navbar.Brand as={Link} to="/">BugFarmr</Navbar.Brand>
                {/* Hamburger Icon */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link as={Link} to="/" >Bugs</Nav.Link>
                        <Nav.Link as={Link} to="/new" >New Bug</Nav.Link>
                        {/* <Nav.Link as={Link} to="/about">About</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav