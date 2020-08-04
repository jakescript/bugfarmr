import React from 'react';
import { FaBug, FaTrash } from "react-icons/fa"
import { Button, Card, Container } from "react-bootstrap"
import SevBadge from "./SeverityBadge"

const cardStyle = {
    textAlign: "left",
    margin: "50px 0"
}

const subtitles = {
    display: "block",
    fontWeight: "300",
    fontStyle: "italic",
}

const topTitles = {
    display: "grid",
    gridTemplateColumns: "30% 30% 30%",
    justifyContent: "center"
}

function Bug(props) {
    const { title, env, desc, expected, severity, solved } = props.item
    
    return (
        <Card border="primary" text="dark"  style={cardStyle}>
            <Card.Header style={topTitles} >
                <div style={{display: "flex", alignItems: "center"}}>
                    <FaBug className="mr-1" />
                    <Card.Title style={{ margin: "auto 0" }}>{title}</Card.Title>
                </div>

                <Card.Text style={{margin: "auto" }}>
                    <SevBadge severity={severity} />
                </Card.Text>
                <div style={{ textAlign: "right" }}>
                    <Button size="sm" variant="danger" onClick={() => deleteBug(title, props.update)}> <FaTrash size={20} /> </Button>
                </div>
            </Card.Header>

            <Container className="pb-4 pl-4 pr-4" style={{ marginTop: "25px" }}>
                <Card.Text><span style={subtitles}>Enviroment:</span> {env}</Card.Text>
                <Card.Text><span style={subtitles}>Description:</span> {desc}</Card.Text>
                <Card.Text><span style={subtitles}>Expected Output:</span> {expected}</Card.Text>
            </Container>
        </Card>
    )
}

function deleteBug(title, update) {
    // get local storage
    // remove selected item from array
    // over-ride localstorage with new array
    const bugs = JSON.parse(localStorage.getItem("bugs"))
    for (let i = 0; i < bugs.length; i++) {
        if (bugs[i].title === title) {
            bugs.splice(i, 1)
        }
    }
    localStorage.setItem("bugs", JSON.stringify(bugs))
    update()
}
export default Bug