import { Connection } from "typeorm";
import { CharacterEquipment } from "../entity/CharacterEquipment";

export enum EQUIPMENT_LOCATIONS {
  LEFT_HAND = "leftHand",
  RIGHT_HAND = "rightHand",
  HEAD = "head",
  CHEST = "chest",
  ARMS = "arms",
  LEGS = "legs",
  FEET = "feet",
}

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
