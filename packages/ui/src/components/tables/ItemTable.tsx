import { ItemModel } from "@super-cascadia-rpg/api/build/src/model/items/itemModel";
import { getItemTypeNameById } from "../../util/itemType";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { isEmpty } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";

function ItemRows(items: ItemModel[], handleShow: (id: number) => void) {
  return items.map((item) => {
    const itemTypeName = getItemTypeNameById(item?.type);

    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{itemTypeName}</td>
        <td>
          <Link to={`/items/${item.id}/edit`}>
            <Button size="sm" variant="primary">
              Edit
            </Button>
          </Link>
          <Link to={`/items/${item.id}`}>
            <Button size="sm" variant="secondary">
              Copy
            </Button>
          </Link>
          <Button
            size="sm"
            variant="danger"
            onClick={() => handleShow(item.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });
}

interface Props {
  items: ItemModel[];
  handleShow: (id: number) => void;
}

export function ItemTable({ items, handleShow }: Props) {
  if (isEmpty(items)) {
    return null;
  }

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{ItemRows(items, handleShow)}</tbody>
    </Table>
  );
}
