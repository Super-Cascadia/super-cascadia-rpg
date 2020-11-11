import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterAttributes } from "../../db/entity/CharacterAttributes";
import {
  getCharacterAttributesById,
  getAllCharacterAttributes,
} from "../../db/selectors/characterAttributes";

export const getCharacterAttributesHandler = async (
  connection: Connection,
  request: Request
): Promise<CharacterAttributes[] | CharacterAttributes | string> => {
  try {
    if (request.params.id) {
      const attributes = await getCharacterAttributesById(
        connection,
        request.params.id
      );

      if (!attributes) {
        return "attributes not found";
      }

      return attributes as CharacterAttributes;
    } else {
      return getAllCharacterAttributes(connection);
    }
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
