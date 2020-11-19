import { map } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import { getItemTypeNameById } from "../../../util/itemType";
import Badge from "react-bootstrap/Badge";
import { CharacterInventory } from "@super-cascadia-rpg/api";
import Dropdown from "react-bootstrap/Dropdown";

function getActionsDropdown(
  inventoryItem: CharacterInventory,
  handleShowDeleteModal: (item: CharacterInventory) => void
) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Duplicate</Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          onClick={() => handleShowDeleteModal(inventoryItem)}
        >
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function CharacterInventoryRow({
  inventoryItem,
  handleShowDeleteModal,
}: {
  inventoryItem: CharacterInventory;
  handleShowDeleteModal: (item: CharacterInventory) => void;
}) {
  const itemTypeName = getItemTypeNameById(inventoryItem.item.type);

  return (
    <tr>
      <td>
        <Badge variant="primary">{inventoryItem.id}</Badge>
      </td>
      <td>
        <Badge variant="secondary">{inventoryItem.item.id}</Badge>
      </td>
      <td>{inventoryItem.item.name}</td>
      <td>
        <Badge variant="info">{itemTypeName}</Badge>
      </td>
      <td>{inventoryItem.item.description}</td>
      <td>{getActionsDropdown(inventoryItem, handleShowDeleteModal)}</td>
    </tr>
  );
}

interface Props {
  characterInventory: CharacterInventory[];
  handleShowDeleteModal: (item: CharacterInventory) => void;
}

export default function CharacterInventoryTable({
  characterInventory,
  handleShowDeleteModal,
}: Props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {map(characterInventory, (item: CharacterInventory) => (
          <CharacterInventoryRow
            inventoryItem={item}
            handleShowDeleteModal={handleShowDeleteModal}
          />
        ))}
      </tbody>
    </Table>
  );
}
