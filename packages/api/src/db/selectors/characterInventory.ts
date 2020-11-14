import { Connection } from "typeorm";
import { CharacterInventory } from "../entity/CharacterInventory";

export async function getCharacterInventory(
  connection: Connection,
  id: string
): Promise<CharacterInventory[]> {
  return connection.manager.find<CharacterInventory>(CharacterInventory, {
    where: {
      characterId: id,
    },
    relations: ["item", "character"],
  });
}
