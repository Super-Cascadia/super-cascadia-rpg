import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { getCharacterById } from "../../db/selectors/characters";
import { getItemById } from "../../db/selectors/items/v1/items";
import { createCharacterInventory } from "../../db/selectors/characterInventory";

interface CreateInventoryRequestBody {
  itemId: string;
}

export const createCharacterInventoryHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  try {
    const payload = request.payload as CreateInventoryRequestBody;
    const character = getCharacterById(connection, request.params.id);
    const item = getItemById(connection, payload.itemId);

    return Promise.all([character, item]).then(([character, item]) => {
      if (character && item) {
        return createCharacterInventory(character, item, connection);
      }

      return Promise.resolve(undefined);
    });
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
