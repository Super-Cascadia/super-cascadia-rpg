import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { getCharacterById } from "../../db/selectors/characters";
import { Character } from "../../db/entity/Character";
import { CharacterInventory } from "../../db/entity/CharacterInventory";
import { getCharacterInventoryById } from "../../db/selectors/characterInventory";
import { CharacterEquipment } from "../../db/entity/CharacterEquipment";

function prepareEquipmentObjectObject(
  character: Character,
  inventoryItem: CharacterInventory
) {
  const characterEquipment = new CharacterEquipment();
  characterEquipment.character = character;
  characterEquipment.leftHand = inventoryItem;

  return characterEquipment;
}

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
        const characterEquipment = prepareEquipmentObjectObject(
          character,
          inventoryItem
        );

        return connection.manager.save(CharacterEquipment, characterEquipment);
      }

      return Promise.resolve(undefined);
    });
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
