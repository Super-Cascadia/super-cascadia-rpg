import { Connection, UpdateResult } from "typeorm";
import { Request } from "@hapi/hapi";
import {
  getCharacterEquipment,
  updateEquipmentLocation,
} from "../../db/selectors/characterEquipment";
import { getCharacterInventoryById } from "../../db/selectors/characterInventory";
import { EQUIPMENT_LOCATIONS } from "../../db/entity/constants";
import { isNull } from "lodash";

interface UpdateEquipmentRequestBody {
  inventoryId: string;
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
    ([characterEquipment, characterInventory]) => {
      if (characterEquipment && characterInventory) {
        return updateEquipmentLocation(
          connection,
          characterId,
          inventoryId,
          equipmentLocation,
          characterEquipment,
          characterInventory
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
  const characterEquipment = await getCharacterEquipment(
    connection,
    characterId
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

    if (isNull(inventoryId)) {
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
