import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const NewTaskForm = ({ user, token }) => {
    const API = import.meta.env.VITE_BASE_URL;
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        completed: false,
        user_id: user.user_id
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        const inputValue = type === 'checkbox' ? checked 
        setFormData((prev) => ({
          ...prev,
          [name]: inputValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            title: '',
            description: '',
            completed: false,
            user_id: user.user_id
        });
    };

    return (
        <Container style={{ marginTop: "50px" }}>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formTaskTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter task title" 
                                name="title" 
                                value={formData.title} 
                                onChange={handleInputChange} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formTaskDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Enter task description" 
                                name="description" 
                                value={formData.description} 
                                onChange={handleInputChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3"
                            controlId="completed">
                                <Form.Check type="checkbox"
                                label="Completed"
                                name="completed"
                                checked={formData.completed}>
                                </Form.Check>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default NewTaskForm;

