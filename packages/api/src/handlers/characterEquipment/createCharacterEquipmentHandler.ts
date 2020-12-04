import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { getCharacterById } from "../../db/selectors/characters/characters";
import { getCharacterInventoryById } from "../../db/selectors/characters/characterInventory";
import { createCharacterEquipment } from "../../db/selectors/characters/characterEquipment";

interface CreateEquipmentRequestBody {
  inventoryId: string;
}

export const createCharacterEquipmentHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  try {
    const payload = request.payload as CreateEquipmentRequestBody;

    console.log(
      "create character equipment",
      request.params.id,
      payload.inventoryId
    );

    return Promise.all([
      getCharacterById(connection, request.params.id),
      getCharacterInventoryById(connection, payload.inventoryId),
    ]).then(([character, inventoryItem]) => {
      console.log(character, inventoryItem);
      if (character && inventoryItem) {
        return createCharacterEquipment(connection, character, inventoryItem);
      }

      return Promise.resolve(undefined);
    });
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
