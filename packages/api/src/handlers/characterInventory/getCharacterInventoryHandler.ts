import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterInventory } from "../../db/entity/CharacterInventory";
import { getCharacterInventory } from "../../db/selectors/characters/characterInventory";

export const getCharacterInventoryHandler = async (
  connection: Connection,
  request: Request
): Promise<CharacterInventory[] | string> => {
  try {
    const id = request.params.id;

    if (id) {
      return getCharacterInventory(connection, id);
    }

    return Promise.resolve("error");
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
