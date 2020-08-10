import React, { useState, SyntheticEvent } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ItemType } from "@super-cascadia-rpg/api";
import createItem from "../../api/items/createItem";

const initialFormState = {
  name: "",
  description: "",
  type: ItemType.FOOD,
};

export default function ItemCreate() {
  const [formState, updateFormState] = useState(initialFormState);

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...formState,
      [id]: value,
    };

    updateFormState(newState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    const form = event?.target as HTMLInputElement;

    console.log(form);

    event.preventDefault();
    event.stopPropagation();

    createItem(formState).then(() => {
      return updateFormState(initialFormState);
    });
  };

  console.log(formState);

  return (
    <Container>
      <br />
      <Card>
        <Form onSubmit={handleSubmit}>
          <Card.Header>Create a new Item</Card.Header>
          <Card.Body>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e: SyntheticEvent) => handleFormChange(e)}
              />
              <Form.Text className="text-muted">
                The name of the item.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e: SyntheticEvent) => handleFormChange(e)}
              />
              <Form.Text className="text-muted">
                a description of the item
              </Form.Text>
            </Form.Group>

            <Form.Group
              controlId="type"
              onChange={(e: SyntheticEvent) => handleFormChange(e)}
            >
              <Form.Label>Item Type</Form.Label>
              <Form.Control as="select" custom>
                <option>Food</option>
                <option>Weapon</option>
                <option>Accessory</option>
                <option>Key Item</option>
                <option>Armor</option>
              </Form.Control>
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
