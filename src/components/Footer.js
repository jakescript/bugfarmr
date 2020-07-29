import React from 'react';
import { Container, Navbar, Button } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"

function Footer() {
    return (
        <Navbar variant="primary" bg="primary" fixed="bottom">
            <Container className="justify-content-center">
                <Navbar.Brand>
                    <Button variant="link">
                        <FaGithub size={20} color="white" />
                    </Button>
                    <span style={{fontSize: "0.8rem", color: "white"}} className="align-middle">
                        | ©2020 - Designed & Built by Jacob G
                    </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer