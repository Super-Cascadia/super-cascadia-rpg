import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import { getItemTypeNameById } from "../../util/itemType";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { isEmpty } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from "react-bootstrap/Badge";

function ItemRows(
  items: ItemModel[],
  handleShow: (id: number) => void,
  handleDuplicate: (id: number) => void
) {
  return items.map((item) => {
    const itemTypeName = getItemTypeNameById(item?.type);

    return (
      <tr key={item.id}>
        <td>
          <Badge variant="secondary">{item.id}</Badge>
        </td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{itemTypeName}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <LinkContainer to={`/items/${item.id}/edit`}>
              <Button size="sm" variant="primary">
                Edit
              </Button>
            </LinkContainer>
            <LinkContainer to={`/items/${item.id}/view`}>
              <Button size="sm" variant="secondary">
                View
              </Button>
            </LinkContainer>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => handleDuplicate(item.id)}
            >
              Copy
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={() => handleShow(item.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
}

interface Props {
  items: ItemModel[];
  handleShow: (id: number) => void;
  handleDuplicate: (id: number) => void;
}

export function ItemTable({ items, handleShow, handleDuplicate }: Props) {
  if (isEmpty(items)) {
    return null;
  }

  return (
    <Table striped hover size="sm" responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{ItemRows(items, handleShow, handleDuplicate)}</tbody>
    </Table>
  );
}
