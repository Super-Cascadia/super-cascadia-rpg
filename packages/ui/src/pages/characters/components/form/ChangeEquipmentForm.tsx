import React from "react";
import { toNumber, find } from "lodash";
import InventorySelectControl from "./controls/InventorySelectControl";
import EquipmentLocation from "../EquipmentLocation";
import { CharacterInventory } from "@super-cascadia-rpg/api";

export function ChangeEquipmentForm({
  inventory,
  itemId,
  handleChange,
}: {
  inventory: CharacterInventory[];
  itemId: string;
  handleChange: (event: React.SyntheticEvent) => void;
}) {
  const inventoryItem = find(
    inventory,
    (inventoryItem) => inventoryItem.id === toNumber(itemId)
  );

  return (
    <>
      <InventorySelectControl
        inventory={inventory}
        selectedItem={itemId}
        handleChange={handleChange}
      />
      {inventoryItem && (
        <EquipmentLocation headerTitle="Left Hand" item={inventoryItem} />
      )}
    </>
  );
}
