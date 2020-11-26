import { CharacterEquipment } from "../entity/CharacterEquipment";
import { CharacterInventory } from "../entity/CharacterInventory";
import { EQUIPMENT_LOCATIONS } from "../entity/constants";
import { Character } from "../entity/Character";

export function prepareNewCharacterEquipmentObject(
  character: Character,
  inventoryItem: CharacterInventory
) {
  const characterEquipment = new CharacterEquipment();
  characterEquipment.character = character;
  characterEquipment.leftHand = inventoryItem;

  return characterEquipment;
}

export function prepareUpdatedEquipmentObject(
  characterEquipment: CharacterEquipment,
  inventoryItem: CharacterInventory | null,
  equipmentLocation: EQUIPMENT_LOCATIONS
) {
  switch (equipmentLocation) {
    case EQUIPMENT_LOCATIONS.LEFT_HAND:
      characterEquipment.leftHand = inventoryItem;
      return characterEquipment;
    case EQUIPMENT_LOCATIONS.RIGHT_HAND:
      characterEquipment.rightHand = inventoryItem;
      return characterEquipment;
    case EQUIPMENT_LOCATIONS.HEAD:
      characterEquipment.head = inventoryItem;
      return characterEquipment;
    case EQUIPMENT_LOCATIONS.CHEST:
      characterEquipment.chest = inventoryItem;
      return characterEquipment;
    case EQUIPMENT_LOCATIONS.ARMS:
      characterEquipment.arms = inventoryItem;
      return characterEquipment;
    case EQUIPMENT_LOCATIONS.FEET:
      characterEquipment.feet = inventoryItem;
      return characterEquipment;
    case EQUIPMENT_LOCATIONS.LEGS:
      characterEquipment.legs = inventoryItem;
      return characterEquipment;
    default:
      return characterEquipment;
  }
}
