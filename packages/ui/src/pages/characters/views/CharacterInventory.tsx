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
import CharacterInventoryTable from "../components/CharacterInventoryTable";
import AddCharacterInventory from "../components/AddCharacterInventory";

interface Props {
  character: CharacterWithAttributes;
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
        <AddCharacterInventory characterId={character.id} />
      </Row>
      <Row>
        <CharacterInventoryTable characterInventory={data} />
      </Row>
    </Container>
  );
}
