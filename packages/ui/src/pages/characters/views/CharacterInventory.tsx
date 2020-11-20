import {
  CharacterInventory,
  CharacterWithAttributes,
} from "@super-cascadia-rpg/api";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { toNumber, map } from "lodash";
import { CharacterInventoryStateHook } from "../../../hooks/store/characterStateHooks";
import fetchCharacterInventoryDataHook from "../../../hooks/api/characters/fetchCharacterInventoryDataHook";
import CharacterInventoryTable from "../components/CharacterInventoryTable";
import AddCharacterInventory from "../components/AddCharacterInventory";
import { getCharacterInventory } from "../../../api/characters/inventory/getCharacterInventory";
import DeleteCharacterInventoryModal from "../components/modal/DeleteCharacterInventoryModal";
import deleteCharacterInventory from "../../../api/characters/inventory/deleteCharacterInventory";

interface Props {
  character: CharacterWithAttributes;
}

export function CharacterInventoryView({ character }: Props) {
  const [
    characterInventory,
    setCharacterInventory,
  ]: CharacterInventoryStateHook = useState([] as CharacterInventory[]);
  const [showDeleteModal, setDeleteModalVisibility] = useState<boolean>(false);
  const [selectedItemId, setSelectedItem] = useState<number | null>(null);
  const selectedItem = characterInventory?.find(
    (inventoryItem: CharacterInventory) => inventoryItem.id === selectedItemId
  );

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

  const handleShowDeleteInventoryModal = (item: CharacterInventory) => {
    setSelectedItem(item.id);
    setDeleteModalVisibility(true);
  };

  const handleDeleteInventory = (itemId?: number) => {
    if (itemId) {
      deleteCharacterInventory(itemId).then(() => {
        handleDataReload();
      });
    }

    setSelectedItem(null);
    setDeleteModalVisibility(false);
  };

  return (
    <div>
      <br />
      <Row>
        <AddCharacterInventory
          characterId={character.id}
          onDataReload={handleDataReload}
        />
      </Row>
      <Row>
        <CharacterInventoryTable
          characterInventory={characterInventory}
          handleShowDeleteModal={handleShowDeleteInventoryModal}
        />
      </Row>
      {showDeleteModal && selectedItem && (
        <DeleteCharacterInventoryModal
          show={showDeleteModal}
          selectedItem={selectedItem}
          handleClose={handleDeleteInventory}
          characterId={character.id}
        />
      )}
    </div>
  );
}
