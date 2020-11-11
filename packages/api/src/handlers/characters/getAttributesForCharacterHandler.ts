import { Connection } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterAttributes } from "../../db/entity/CharacterAttributes";
import { getCharacterAttributes } from "../../db/selectors/characters";

export const getAttributesForCharacterHandler = async (
  connection: Connection,
  request: Request
): Promise<CharacterAttributes | string> => {
  try {
    const attributes = await getCharacterAttributes(
      connection,
      request.params.id
    );

    if (!attributes) {
      return "attributes not found";
    }

    return attributes as CharacterAttributes;
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
