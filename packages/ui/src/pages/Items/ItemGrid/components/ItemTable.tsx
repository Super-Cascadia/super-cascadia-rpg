import { ItemModel } from "@super-cascadia-rpg/api";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { isEmpty } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Badge from "react-bootstrap/Badge";
import { getItemTypeNameById } from "../../../../util/itemType";
import Loading from "../../../../components/Loading";

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
          <ButtonGroup aria-label="Item View and Edit Action Buttons">
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
          <ButtonGroup aria-label="Item Copy and Delete Action Buttons">
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
  isLoading: boolean;
  items: ItemModel[];
  handleShow: (id: number) => void;
  handleDuplicate: (id: number) => void;
}

export function ItemTable({
  items,
  handleShow,
  handleDuplicate,
  isLoading,
}: Props) {
  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty(items)) {
    return <span>There are no items, you should create some.</span>;
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
