import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ItemCreate() {
    return (
        <Container>
            <br/>
            <Card>
                <Card.Header>Create a new Item</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formName">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext />
                              <Form.Text className="text-muted">
                                The name of the item.
                              </Form.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formDescription">
                            <Form.Label column sm="2">
                            Description
                            </Form.Label>
                            <Col sm="10">
                              <Form.Control plaintext />
                              <Form.Text className="text-muted">
                                a description of the item
                              </Form.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formType">
                            <Form.Label column sm="2">
                            Type
                            </Form.Label>
                            <Col sm="10">
                            <Form>
                              <Form.Group controlId="form.itemType">
                                <Form.Label>Custom select</Form.Label>
                                <Form.Control as="select" custom>
                                  <option>Food</option>
                                  <option>Weapon</option>
                                  <option>Accessory</option>
                                  <option>Key Item</option>
                                  <option>Armor</option>
                                </Form.Control>
                              </Form.Group>
                            </Form>
                            </Col>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">
                <Button variant="primary" size="sm">
                    Submit        
                </Button>
                </Card.Footer>
            </Card>
            
        </Container>
    )
}
