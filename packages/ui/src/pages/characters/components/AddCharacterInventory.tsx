import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetchItemsDataHook from "../../../hooks/api/items/fetchItemsDataHook";
import { Item } from "@super-cascadia-rpg/api";
import { ITEM_GRID_TABS } from "../../Items/ItemGrid/ItemGrid";
import { map } from "lodash";

interface Props {
  characterId: number;
}

function itemSelectControl(data: Item[]) {
  return (
    <Form.Control as="select" custom>
      {map(data, (item: Item) => {
        return (
          <option value={item.id} key={item.id}>
            {item.id} - {item.name}
          </option>
        );
      })}
    </Form.Control>
  );
}

export default function AddCharacterInventory({ characterId }: Props) {
  const [data, setData] = useState([] as Item[]);

  useEffect(
    fetchItemsDataHook(ITEM_GRID_TABS.ALL, setData, () => {}),
    // @ts-ignore
    {}
  );

  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Add Inventory</Form.Label>
        <Row>
          <Col xs={10}>{itemSelectControl(data)}</Col>
          <Col xs={1}>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}
