import { Connection, InsertResult } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterAttributes } from "../../db/entity/CharacterAttributes";
import { getCharacterById } from "../../db/selectors/characters/characters";
import { Character } from "../../db/entity/Character";
import { saveCharacterAttributes } from "../../db/selectors/characters/characterAttributes";

const createCharacterAttributesHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  try {
    const characterAttributes = request.payload as CharacterAttributes;
    const characterId = request.params.id;

    return getCharacterById(connection, characterId).then(
      (response: Character | undefined) => {
        if (response) {
          return saveCharacterAttributes(
            connection,
            response,
            characterAttributes
          );
        }

        return Promise.resolve(undefined);
      }
    );
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default createCharacterAttributesHandler;
