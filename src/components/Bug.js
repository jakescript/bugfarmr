import React from 'react';
import { Button, Card, Container } from "react-bootstrap"

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
    const { title, env, desc, expected, severity } = props.item
    const sev = severity / 100
    let color
    if (sev <= 0.25) {
        color = "green"
    } else if (sev > 0.25 && sev <= 0.5) {
        color = "blue"
    } else if (sev > 0.5 && sev <= 0.75) {
        color = "purple"
    } else if (sev >= 0.75) {
        color = "red"
    }

    return (
        <Card border="secondary" bg="secondary" text="light" className="p-4" style={cardStyle}>
            <Card.Header style={topTitles} >
                <Card.Title style={{ margin: "auto 0" }}>{title}</Card.Title>
                <Card.Text style={{ color: color, margin: "auto"}}>{sev}</Card.Text>
                <div style={{textAlign: "right"}}>
                    <Button size="sm" variant="danger" onClick={() => deleteBug(title, props.update)}> X </Button>
                </div>
            </Card.Header>

            <Container style={{ marginTop: "25px" }}>
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