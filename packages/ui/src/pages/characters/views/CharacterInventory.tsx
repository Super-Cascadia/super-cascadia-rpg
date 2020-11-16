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
import { getCharacterInventory } from "../../../api/characters/inventory/getCharacterInventory";

interface Props {
  character: CharacterWithAttributes;
}

export function CharacterInventoryView({ character }: Props) {
  const [
    characterInventory,
    setCharacterInventory,
  ]: CharacterInventoryStateHook = useState([] as CharacterInventory[]);

  useEffect(
    fetchCharacterInventoryDataHook(
      toNumber(character.id),
      setCharacterInventory
    ),
    // @ts-ignore
    {}
  );

  const handleDataReload = async () => {
    const characterInventory = await getCharacterInventory(
      toNumber(character.id)
    );

    setCharacterInventory(characterInventory);
  };

  return (
    <Container>
      <br />
      <Row>
        <AddCharacterInventory
          characterId={character.id}
          onDataReload={handleDataReload}
        />
      </Row>
      <Row>
        <CharacterInventoryTable characterInventory={characterInventory} />
      </Row>
    </Container>
  );
}
