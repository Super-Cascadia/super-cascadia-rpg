import React, { useState, SyntheticEvent } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CharacterClassId } from "@super-cascadia-rpg/api/build/src/model/characterClass/characterClassModel";
import createCharacter from "../../api/characters/createCharacter";

const initialFormState = {
  name: "",
  description: "",
  type: CharacterClassId.FREELANCER,
};

export default function CharacterCreate() {
  const [formState, updateFormState] = useState(initialFormState);
  const history = useHistory();

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...formState,
      [id]: id === "type" ? parseInt(value, 10) : value,
    };

    updateFormState(newState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    createCharacter(formState).then(() => {
      updateFormState(initialFormState);
      history.push("/characters");
    });
  };

  return (
    <Container>
      <br />
      <Card>
        <Form onSubmit={handleSubmit}>
          <Card.Header>Create a new Character</Card.Header>
          <Card.Body>
            <Form.Group as={Row} controlId="firstName">
              <Form.Label column sm="2">
                First Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="input"
                  onChange={(e: SyntheticEvent) => handleFormChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="lastName">
              <Form.Label column sm="2">
                Last Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="input"
                  onChange={(e: SyntheticEvent) => handleFormChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="description">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  onChange={(e: SyntheticEvent) => handleFormChange(e)}
                />
                <Form.Text className="text-muted">
                  a description of the character
                </Form.Text>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="primaryClass"
              onChange={(e: SyntheticEvent) => handleFormChange(e)}
            >
              <Form.Label column sm="2">
                Primary Class
              </Form.Label>
              <Col sm="10">
                <Form.Control as="select">
                  <option value={0}>Freelancer</option>
                  <option value={1}>Rogue</option>
                  <option value={2}>Warrior</option>
                  <option value={3}>Mage</option>
                  <option value={4}>Druid</option>
                  <option value={5}>Sorcerer</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  The Primary class of the character. Determines key attributes
                  and modifiers.
                </Form.Text>
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Form.Group role="form">
              <Button variant="primary" size="sm" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
}
