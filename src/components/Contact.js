import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader.js";
import Message from "./Message.js";
import FormContainer from "./FormContainer.js";
import { register } from "../action/userAction.js";

const Contact = ({ location, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading } = userRegister;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, comments));
        setName("");
        setEmail("");
        setComments("");
    };

    return (
        <FormContainer>
            <h3 style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: '2rem' }}>Contact</h3>

            {message && <Message variant="danger">{message}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="comments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter Comments"
                        style={{ height: '100px' }}
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button className="mt-4" type="submit" variant="primary">
                    Submit
                </Button>

                <br />
                <br />
                <h5 style={{ fontFamily: 'monospace', textAlign: 'center', margin: 'auto' }}>
                    You can also visit <a href="http://internship.zuri.team">Zuri Team </a>
                </h5>

            </Form>
        </FormContainer>
    );
};

export default Contact;
