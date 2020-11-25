import { Connection } from "typeorm";
import { CharacterInventory } from "../entity/CharacterInventory";
import { Character } from "../entity/Character";
import { Item } from "../entity/Item";

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

function prepareCharacterInventoryObject(character: Character, item: Item) {
  const characterInventory = new CharacterInventory();
  characterInventory.character = character;
  characterInventory.item = item;

  return characterInventory;
}

export async function createCharacterInventory(
  character: Character,
  item: Item,
  connection: Connection
) {
  const characterInventory = prepareCharacterInventoryObject(character, item);

  return connection.manager.save(CharacterInventory, characterInventory);
}
