import { Connection } from "typeorm";
import { CharacterInventory } from "../entity/CharacterInventory";
import { CharacterAttributes } from "../entity/CharacterAttributes";

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

export async function getCharacterInventoryById(
  connection: Connection,
  id: string
): Promise<CharacterInventory | undefined> {
  return connection.manager.findOne<CharacterInventory>(CharacterInventory, {
    where: {
      id,
    },
    relations: ["item"],
  });
}
