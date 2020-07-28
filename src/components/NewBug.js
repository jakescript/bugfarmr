import React, { Component } from 'react';
import { Container, Form, Col, Row, Button, Alert } from "react-bootstrap"

class NewBug extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            env: "",
            desc: "",
            severity: "50",
            expected: "",
            isValid: false,
            bugArr: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getLocalStorage()
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        // Form Validation
        this.setState({ isValid: true })
        const bug = {
            title: this.state.title,
            env: this.state.env,
            desc: this.state.desc,
            severity: this.state.severity,
            expected: this.state.expected,
        }
        this.state.bugArr.push(bug)
        const bugStr = JSON.stringify(this.state.bugArr)
        localStorage.setItem("bugs", bugStr)
    }

    getLocalStorage = () => {
        const bugs = JSON.parse(localStorage.getItem("bugs"))
        if(!bugs){
            localStorage.setItem("bugs", JSON.stringify(this.state.bugArr))
        }else{
            this.setState({bugArr: bugs})
        }
    }

    render() {

        return (
            <div style={{ display: "flex", height: "80vh" }}>
                <Container className="my-auto">
                    <h1>Add Bug</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Form.Group sm={7} as={Col} controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    onChange={this.handleChange}
                                    name="title"
                                    type="text"
                                    placeholder="Name your bug..."
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="enviroment">
                                <Form.Label>Enviroment</Form.Label>
                                <Form.Control
                                    onChange={this.handleChange}
                                    name="env"
                                    type="text"
                                    placeholder="OSX, Windows, Chrome, ect..."
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formRange">
                            <Form.Label>Severity</Form.Label>
                            <Form.Control
                                onChange={this.handleChange}
                                name="severity"
                                type="range"
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                onChange={this.handleChange}
                                name="desc" 
                                as="textarea"
                                rows="4"
                                placeholder="Describe the bug..."
                            />
                        </Form.Group>

                        <Form.Group controlId="formExpectedOutput">
                            <Form.Label>Expected Output</Form.Label>
                            <Form.Control
                                onChange={this.handleChange}
                                name="expected" 
                                type="text"
                                placeholder="What was supposed to happen?"
                            />
                        </Form.Group>

                        <Button style={{ marginBottom: "25px" }} size="sm" block type="submit">Submit</Button>
                    </Form>

                    {this.state.isValid && (
                        <Alert variant="success">
                            New bug added to farm
                        </Alert>
                    )}
                </Container>
            </div>
        );
    }
}

export default NewBug;