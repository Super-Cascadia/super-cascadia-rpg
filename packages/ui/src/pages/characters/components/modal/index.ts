import { filter } from "lodash";
import {
  CharacterInventory,
  EQUIPMENT_LOCATIONS,
  ItemType,
} from "@super-cascadia-rpg/api";

function getItemTypeFromEquipmentLocation(
  equipmentLocation: EQUIPMENT_LOCATIONS
): ItemType {
  switch (equipmentLocation) {
    case EQUIPMENT_LOCATIONS.LEFT_HAND:
      return ItemType.WEAPON;
    case EQUIPMENT_LOCATIONS.RIGHT_HAND:
      return ItemType.WEAPON;
    case EQUIPMENT_LOCATIONS.HEAD:
      return ItemType.ARMOR;
    case EQUIPMENT_LOCATIONS.CHEST:
      return ItemType.ARMOR;
    case EQUIPMENT_LOCATIONS.ARMS:
      return ItemType.ARMOR;
    case EQUIPMENT_LOCATIONS.FEET:
      return ItemType.ARMOR;
    case EQUIPMENT_LOCATIONS.LEGS:
      return ItemType.ARMOR;
    default:
      return ItemType.KEY_ITEM;
  }
}

function filterByInventoryType(
  data: CharacterInventory[],
  equipmentLocation: EQUIPMENT_LOCATIONS
) {
  const itemType = getItemTypeFromEquipmentLocation(equipmentLocation);

  return filter(data, (characterInventory: CharacterInventory) => {
    return characterInventory.item.type === itemType;
  });
}

export function handleFetchInventorySuccess(
  setInventory: (data: CharacterInventory[]) => void,
  equipmentLocation: EQUIPMENT_LOCATIONS
) {
  return (data: CharacterInventory[]) => {
    const filteredData = filterByInventoryType(data, equipmentLocation);
    setInventory(filteredData);
  };
}
