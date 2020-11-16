import { map } from "lodash";
import Table from "react-bootstrap/Table";
import React from "react";
import { getItemTypeNameById } from "../../../util/itemType";
import Badge from "react-bootstrap/Badge";
import { CharacterInventory } from "@super-cascadia-rpg/api";

interface InventoryRowProps {
  inventoryItem: CharacterInventory;
}

function CharacterInventoryRow({ inventoryItem }: InventoryRowProps) {
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
    </tr>
  );
}

interface Props {
  characterInventory: CharacterInventory[];
}

export default function CharacterInventoryTable({ characterInventory }: Props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Item ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {map(characterInventory, (item: CharacterInventory) => (
          <CharacterInventoryRow inventoryItem={item} />
        ))}
      </tbody>
    </Table>
  );
}
