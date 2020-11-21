import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterEquipment } from "../../db/entity/CharacterEquipment";
import { getCharacterEquipment } from "../../db/selectors/characterEquipment";

export const getCharacterEquipmentHandler = async (
  connection: Connection,
  request: Request
): Promise<CharacterEquipment | string | undefined> => {
  try {
    const id = request.params.id;

    if (id) {
      const equipment = await getCharacterEquipment(connection, id);

      if (!equipment) {
        return "equipment not found";
      }

      return equipment as CharacterEquipment;
    }
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
