import React, { useEffect, useState, SyntheticEvent } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import fetchItemDataHook from "../../hooks/api/items/fetchItemDataHook";
import { toNumber, isEmpty } from "lodash";
import Spinner from "react-bootstrap/Spinner";
import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import { toString } from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";
import updateItem from "../../api/items/updateItem";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Item } from "@super-cascadia-rpg/api/build/src/db/entity/Item";

export default function ItemEdit() {
  const { id: itemId } = useParams<{ id: string }>();
  const id = toNumber(itemId);
  const [data, setData] = useState({ item: {} as Item });
  const { item } = data;

  const handleFormChange = (event: SyntheticEvent) => {
    const { id, value } = event?.target as HTMLInputElement;

    const newState = {
      ...data,
      item: {
        ...data.item,
        [id]: id === "type" ? parseInt(value, 10) : value,
      },
    };

    setData(newState);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    const form = event?.target as HTMLInputElement;

    console.log(form);

    event.preventDefault();
    event.stopPropagation();

    updateItem(data.item).then(() => {
      setData(data);
      fetchItemDataHook(id, setData);
    });
  };

  // @ts-ignore
  useEffect(fetchItemDataHook(id, setData), {});

  console.log(data);

  if (isEmpty(item)) {
    return (
      <Container>
        <Card>
          <Card.Header>
            <h1>Item View</h1>
          </Card.Header>
          <Card.Body>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item href="/items">Items</Breadcrumb.Item>
        <Breadcrumb.Item active>{id}</Breadcrumb.Item>
        <Breadcrumb.Item>Edit</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Card.Header>
            <h1>{item.name}</h1>
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row} controlId="formId">
              <Form.Label column sm="2">
                ID
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly as="input" value={toString(item.id)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="name">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="input"
                  value={item.name}
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
                  as="input"
                  value={item.description}
                  onChange={(e: SyntheticEvent) => handleFormChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              controlId="type"
              onChange={(e: SyntheticEvent) => handleFormChange(e)}
            >
              <Form.Label column sm="2">
                Item Type
              </Form.Label>
              <Col sm="10">
                <Form.Control as="select" custom defaultValue={item.type}>
                  <option>Food</option>
                  <option>Weapon</option>
                  <option>Accessory</option>
                  <option>Key Item</option>
                  <option>Armor</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Container>
              <Row>
                <Col sm="1">
                  <Button variant="primary" type="submit" size="sm">
                    Submit
                  </Button>
                </Col>
                <Col sm="10" />
                <Col sm="1">
                  <LinkContainer to={`/items/${item.id}/view`}>
                    <Button variant="secondary" type="submit" size="sm">
                      Cancel
                    </Button>
                  </LinkContainer>
                </Col>
              </Row>
            </Container>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
}
