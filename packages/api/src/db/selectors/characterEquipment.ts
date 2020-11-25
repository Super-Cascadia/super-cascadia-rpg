import { Connection, UpdateResult } from "typeorm";
import { CharacterEquipment } from "../entity/CharacterEquipment";
import { EQUIPMENT_LOCATIONS } from "../entity/constants";
import { Character } from "../entity/Character";
import { CharacterInventory } from "../entity/CharacterInventory";

export async function getCharacterEquipment(
  connection: Connection,
  id: string
): Promise<CharacterEquipment | undefined> {
  return connection.manager.findOne<CharacterEquipment>(CharacterEquipment, {
    where: {
      characterId: id,
    },
    relations: [
      EQUIPMENT_LOCATIONS.LEFT_HAND,
      EQUIPMENT_LOCATIONS.RIGHT_HAND,
      EQUIPMENT_LOCATIONS.HEAD,
      EQUIPMENT_LOCATIONS.CHEST,
      EQUIPMENT_LOCATIONS.ARMS,
      EQUIPMENT_LOCATIONS.FEET,
      EQUIPMENT_LOCATIONS.LEGS,
      "character",
    ],
  });
}

function prepareUpdatedEquipmentObject(
  characterEquipment: CharacterEquipment,
  inventoryItem: CharacterInventory,
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

export async function updateEquipmentLocation(
  connection: Connection,
  equipmentId: string,
  inventoryId: string,
  equipmentLocation: EQUIPMENT_LOCATIONS,
  characterEquipment: CharacterEquipment,
  inventoryItem: CharacterInventory
): Promise<UpdateResult> {
  const updatedCharacterEquipment = prepareUpdatedEquipmentObject(
    characterEquipment,
    inventoryItem,
    equipmentLocation
  );

  return connection.manager.update<CharacterEquipment>(
    CharacterEquipment,
    updatedCharacterEquipment.id,
    updatedCharacterEquipment
  );
}

function prepareNewCharacterEquipmentObject(
  character: Character,
  inventoryItem: CharacterInventory
) {
  const characterEquipment = new CharacterEquipment();
  characterEquipment.character = character;
  characterEquipment.leftHand = inventoryItem;

  return characterEquipment;
}

export async function createCharacterEquipment(
  connection: Connection,
  character: Character,
  inventoryItem: CharacterInventory
) {
  return connection.manager.save(
    CharacterEquipment,
    prepareNewCharacterEquipmentObject(character, inventoryItem)
  );
}
