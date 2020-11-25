import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { updateEquipmentLocation } from "../../db/selectors/characterEquipment";

interface UpdateEquipmentRequestBody {
  characterId: string;
  inventoryId: string;
  equipmentLocation: string;
}

export const updateCharacterEquipmentHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  try {
    const payload = request.payload as UpdateEquipmentRequestBody;

    return updateEquipmentLocation(
      connection,
      payload.characterId,
      payload.inventoryId,
      payload.equipmentLocation
    );
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
