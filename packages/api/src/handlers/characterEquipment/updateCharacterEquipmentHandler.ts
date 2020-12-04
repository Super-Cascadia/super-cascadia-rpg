import { Connection, UpdateResult } from "typeorm";
import { Request } from "@hapi/hapi";
import {
  getCharacterEquipment,
  updateEquipmentLocation,
} from "../../db/selectors/characters/characterEquipment";
import { getCharacterInventoryById } from "../../db/selectors/characters/characterInventory";
import { EQUIPMENT_LOCATIONS } from "../../db/entity/constants";
import { isUndefined } from "lodash";

interface UpdateEquipmentRequestBody {
  inventoryId?: string;
  equipmentLocation: EQUIPMENT_LOCATIONS;
}

async function updateEquipmentLocationToNewInventory(
  connection: Connection,
  characterId: string,
  inventoryId: string,
  equipmentLocation: EQUIPMENT_LOCATIONS
): Promise<UpdateResult | undefined> {
  const characterEquipment = getCharacterEquipment(connection, characterId);
  const characterInventory = getCharacterInventoryById(connection, inventoryId);

  return Promise.all([characterEquipment, characterInventory]).then(
    ([characterEquipment, inventoryItem]) => {
      if (characterEquipment && inventoryItem) {
        return updateEquipmentLocation(
          connection,
          characterId,
          equipmentLocation,
          characterEquipment,
          inventoryItem
        );
      }
    }
  );
}

async function removeInventoryFromEquipmentLocation(
  connection: Connection,
  characterId: string,
  equipmentLocation: EQUIPMENT_LOCATIONS
) {
  return getCharacterEquipment(connection, characterId).then(
    (characterEquipment) => {
      if (characterEquipment) {
        return updateEquipmentLocation(
          connection,
          characterId,
          equipmentLocation,
          characterEquipment,
          null
        );
      }
    }
  );
}

export const updateCharacterEquipmentHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  try {
    const characterId = request.params.id;
    const {
      inventoryId,
      equipmentLocation,
    } = request.payload as UpdateEquipmentRequestBody;

    if (isUndefined(inventoryId)) {
      return removeInventoryFromEquipmentLocation(
        connection,
        characterId,
        equipmentLocation
      );
    }

    return updateEquipmentLocationToNewInventory(
      connection,
      characterId,
      inventoryId,
      equipmentLocation
    );
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
