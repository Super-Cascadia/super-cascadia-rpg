import React, { useEffect, useState, SyntheticEvent } from "react";
import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import fetchItemDataHook from "../../hooks/api/items/fetchItemDataHook";

interface ItemEditState {
  item: ItemModel;
}

type ItemsStateHook = [ItemEditState, (data: any) => void];

export default function ItemEdit() {
  const { id } = useParams();
  const [data, setData]: ItemsStateHook = useState({ item: {} as ItemModel });
  const { item } = data;
  const [formState, updateFormState] = useState(data);

  // @ts-ignore
  useEffect(fetchItemDataHook(id, setData), {});

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...formState,
      [id]: value,
    };

    updateFormState(newState);
  };

  return (
    <Container>
      <br />
      <Card>
        <Form>
          <Card.Header>{item.name}</Card.Header>
          <Card.Body>
            <Form.Group controlId="formId">
              <Form.Label>ID</Form.Label>
              <Form.Control defaultValue={item.id} />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>

              <Form.Control defaultValue={item.name} />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder={item.description} />
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
            <Button variant="primary" type="submit" size="sm">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
}
