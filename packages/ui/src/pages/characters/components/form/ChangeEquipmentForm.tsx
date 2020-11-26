import React from "react";
import { toNumber, find } from "lodash";
import InventorySelectControl from "./controls/InventorySelectControl";
import { CharacterInventory } from "@super-cascadia-rpg/api";
import EquipmentCard from "../cards/EquipmentCard";

export function ChangeEquipmentForm({
  inventory,
  selectedInventoryId,
  handleChange,
}: {
  inventory: CharacterInventory[];
  selectedInventoryId: string;
  handleChange: (event: React.SyntheticEvent) => void;
}) {
  const selectedInventoryItem = find(
    inventory,
    (inventoryItem) => inventoryItem.id === toNumber(selectedInventoryId)
  );

  return (
    <>
      <InventorySelectControl
        inventory={inventory}
        selectedInventoryId={selectedInventoryId}
        handleChange={handleChange}
      />
      {selectedInventoryItem && (
        <EquipmentCard headerTitle="Left Hand" item={selectedInventoryItem} />
      )}
    </>
  );
}
