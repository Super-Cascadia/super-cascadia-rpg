import { Connection, UpdateResult } from "typeorm";
import { CharacterEquipment } from "../entity/CharacterEquipment";
import { EQUIPMENT_LOCATIONS } from "../entity/constants";

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
  characterId: string,
  inventoryId: string,
  equipmentLocation: string
): Promise<UpdateResult> {
  const data = {};
  const equipmentId = "1";

  return connection.manager.update<CharacterEquipment>(
    equipmentId,
    CharacterEquipment,
    data
  );
}
