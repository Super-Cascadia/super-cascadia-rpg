import { Connection, UpdateResult } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterAttributes } from "../../db/entity/CharacterAttributes";
import { updateAttributesById } from "../../db/selectors/characterAttributes";

export const updateCharacterAttributesHandler = async (
  connection: Connection,
  request: Request
): Promise<CharacterAttributes | UpdateResult> => {
  try {
    return updateAttributesById(
      connection,
      request.params.id,
      request.payload as CharacterAttributes
    );
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
