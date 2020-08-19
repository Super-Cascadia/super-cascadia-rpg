import React, { useEffect, useState } from "react";
import { ItemModel } from "@super-cascadia-rpg/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import fetchItemDataHook from "../../hooks/api/items/fetchItemDataHook";
import { getItemTypeNameById } from "../../util/itemType";
import { isEmpty } from "lodash";
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Loading from "../../components/Loading";

interface ItemEditState {
  item: ItemModel;
}

type ItemsStateHook = [ItemEditState, (data: any) => void];

export default function ItemView() {
  const { id } = useParams();
  const [data, setData]: ItemsStateHook = useState({ item: {} as ItemModel });
  const { item } = data;
  const itemTypeName = getItemTypeNameById(item?.type);

  // @ts-ignore
  useEffect(fetchItemDataHook(id, setData), {});

  if (isEmpty(item)) {
    return <Loading title="Item View" />;
  }

  return (
    <Container>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item href="/items">Items</Breadcrumb.Item>
        <Breadcrumb.Item active>{id}</Breadcrumb.Item>
        <Breadcrumb.Item>View</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Card.Header>
          <h1>{item.name}</h1>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Row} controlId="formId">
              <Form.Label column sm="2">
                ID
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly defaultValue={item.id} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly defaultValue={item.name} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDescription">
              <Form.Label column sm="2">
                Description
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly value={item.description} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formType">
              <Form.Label column sm="2">
                Type
              </Form.Label>
              <Col sm="10">
                <Form.Control as="select" readOnly value={itemTypeName}>
                  <option value={0}>Food</option>
                  <option value={1}>Weapon</option>
                  <option value={2}>Accessory</option>
                  <option value={3}>Key Item</option>
                  <option value={4}>Armor</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Form>
          <Card.Footer className="text-muted">
            <LinkContainer to={`/items/${item.id}/edit`}>
              <Button size="sm" variant="primary">
                Edit
              </Button>
            </LinkContainer>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  );
}
