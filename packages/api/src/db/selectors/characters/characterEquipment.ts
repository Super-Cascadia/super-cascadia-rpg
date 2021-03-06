import { Connection, UpdateResult } from "typeorm";
import { CharacterEquipment } from "../../entity/characters/CharacterEquipment";
import { EQUIPMENT_LOCATIONS } from "../../entity/items/v1/constants";
import { Character } from "../../entity/characters/Character";
import { CharacterInventory } from "../../entity/characters/CharacterInventory";
import {
  prepareNewCharacterEquipmentObject,
  prepareUpdatedEquipmentObject,
} from "../../util/characterEquipment.util";

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

export async function updateEquipmentLocation(
  connection: Connection,
  equipmentId: string,
  equipmentLocation: EQUIPMENT_LOCATIONS,
  characterEquipment: CharacterEquipment,
  inventoryItem: CharacterInventory | null
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
