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

interface Props {
  character: CharacterWithAttributes;
}

function CharacterInventoryRow({ item }: { item: CharacterInventory }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.item.name}</td>
      <td>{item.item.description}</td>
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
              <th>id</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {map(data, (item: CharacterInventory) => (
              <CharacterInventoryRow item={item} />
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
