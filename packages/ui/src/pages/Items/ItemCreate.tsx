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
                        <Form.Group controlId="formName">
                            <Form.Label>
                                Name
                            </Form.Label>
                              <Form.Control />
                              <Form.Text className="text-muted">
                                The name of the item.
                              </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>
                            Description
                            </Form.Label>
                              <Form.Control />
                              <Form.Text className="text-muted">
                                a description of the item
                              </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formType">
                            <Form.Label>
                            Item Type
                            </Form.Label>
                            <Form>
                              <Form.Group controlId="form.itemType">
                                <Form.Control as="select" custom>
                                  <option>Food</option>
                                  <option>Weapon</option>
                                  <option>Accessory</option>
                                  <option>Key Item</option>
                                  <option>Armor</option>
                                </Form.Control>
                              </Form.Group>
                            </Form>
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
