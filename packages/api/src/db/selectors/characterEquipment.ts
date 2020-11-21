import { Connection } from "typeorm";
import { CharacterEquipment } from "../entity/CharacterEquipment";

export async function getCharacterEquipment(
  connection: Connection,
  id: string
): Promise<CharacterEquipment | undefined> {
  return connection.manager.findOne<CharacterEquipment>(CharacterEquipment, {
    where: {
      characterId: id,
    },
    relations: [
      "leftHand",
      "rightHand",
      "head",
      "chest",
      "arms",
      "legs",
      "feet",
      "character",
    ],
  });
}
