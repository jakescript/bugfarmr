import React from 'react';
import { Container } from "react-bootstrap"

function NotFound() {
    return (
        <Container className="mt-5 justify-content-center" style={{ display: "flex"}}>
            <div style={{
                display: "flex", 
                flexDirection: "column",
                textAlign: "center"
            }}>
                <h1>404</h1>
                <p>No Bugs Here</p>
            </div>
        </Container>
    )
}

export default NotFound