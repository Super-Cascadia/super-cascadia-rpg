import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import {
  getCharacterEquipment,
  updateEquipmentLocation,
} from "../../db/selectors/characterEquipment";
import { getCharacterInventoryById } from "../../db/selectors/characterInventory";
import { EQUIPMENT_LOCATIONS } from "../../db/entity/constants";

interface UpdateEquipmentRequestBody {
  inventoryId: string;
  equipmentLocation: EQUIPMENT_LOCATIONS;
}

export const updateCharacterEquipmentHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  try {
    const payload = request.payload as UpdateEquipmentRequestBody;
    const characterId = request.params.id;

    let characterEquipment = getCharacterEquipment(connection, characterId);
    let characterInventory = getCharacterInventoryById(
      connection,
      payload.inventoryId
    );
    return Promise.all([characterEquipment, characterInventory]).then(
      ([characterEquipment, characterInventory]) => {
        if (characterEquipment && characterInventory) {
          return updateEquipmentLocation(
            connection,
            characterId,
            payload.inventoryId,
            payload.equipmentLocation,
            characterEquipment,
            characterInventory
          );
        }
      }
    );
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
