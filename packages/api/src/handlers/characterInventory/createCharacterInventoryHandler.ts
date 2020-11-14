import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { getCharacterById } from "../../db/selectors/characters";
import { Character } from "../../db/entity/Character";
import { getItemById } from "../../db/selectors/items";
import { CharacterInventory } from "../../db/entity/CharacterInventory";
import { Item } from "src/interfaces";

function prepareCharacterInventoryObject(character: Character, item: Item) {
  const characterInventory = new CharacterInventory();
  characterInventory.character = character;
  characterInventory.item = item;

  return characterInventory;
}

interface CreateInventoryRequestBody {
  id: string;
}

export const createCharacterInventoryHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  try {
    const payload = request.payload as CreateInventoryRequestBody;

    return Promise.all([
      getCharacterById(connection, request.params.id),
      getItemById(connection, payload.id),
    ]).then(([character, item]) => {
      console.log(character, item);
      if (character && item) {
        const characterInventory = prepareCharacterInventoryObject(
          character,
          item
        );

        return connection.manager.save(CharacterInventory, characterInventory);
      }

      return Promise.resolve(undefined);
    });
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
