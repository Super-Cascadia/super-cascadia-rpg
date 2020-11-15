import {
  CharacterInventory,
  CharacterWithAttributes,
} from "@super-cascadia-rpg/api";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import { toNumber, map } from "lodash";
import { CharacterInventoryStateHook } from "../../../hooks/store/characterStateHooks";
import fetchCharacterInventoryDataHook from "../../../hooks/api/characters/fetchCharacterInventoryDataHook";
import Badge from "react-bootstrap/Badge";
import { getItemTypeNameById } from "../../../util/itemType";

interface Props {
  character: CharacterWithAttributes;
}

function CharacterInventoryRow({
  inventoryItem,
}: {
  inventoryItem: CharacterInventory;
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
    </tr>
  );
}

export function CharacterInventoryView({ character }: Props) {
  const [data, setData]: CharacterInventoryStateHook = useState(
    [] as CharacterInventory[]
  );

  useEffect(
    fetchCharacterInventoryDataHook(toNumber(character.id), setData),
    // @ts-ignore
    {}
  );

  return (
    <Container>
      <br />

      <Row>
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
            {map(data, (item: CharacterInventory) => (
              <CharacterInventoryRow inventoryItem={item} />
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
