import React from "react";
import { toNumber, find } from "lodash";
import InventorySelectControl from "./controls/InventorySelectControl";
import EquipmentLocation from "../EquipmentLocation";
import {
  CharacterInventory,
  EQUIPMENT_LOCATIONS,
} from "@super-cascadia-rpg/api";

export function ChangeEquipmentForm({
  inventory,
  selectedInventoryId,
  handleChange,
  equipmentLocation,
}: {
  inventory: CharacterInventory[];
  selectedInventoryId: string;
  handleChange: (event: React.SyntheticEvent) => void;
  equipmentLocation: EQUIPMENT_LOCATIONS;
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
        <EquipmentLocation
          headerTitle="Left Hand"
          item={selectedInventoryItem}
          equipmentLocation={equipmentLocation}
        />
      )}
    </>
  );
}
