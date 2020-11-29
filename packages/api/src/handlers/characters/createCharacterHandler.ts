import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { createNewCharacter } from "../../db/selectors/characters";
import { Character } from "../../db/entity/Character";
import { saveCharacterAttributes } from "../../db/selectors/characterAttributes";
import { CharacterAttributes } from "../../db/entity/CharacterAttributes";

function buildCharacterAttributesObject() {
  return {
    strength: 1,
    dexterity: 1,
    vitality: 1,
    intelligence: 1,
    mind: 1,
    piety: 1,
  } as CharacterAttributes;
}

const createCharacterHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  try {
    return createNewCharacter(connection, request.payload as Character).then(
      (response) => {
        const character = {
          id: response.identifiers[0].id,
        } as Character;

        const characterAttributes = buildCharacterAttributesObject();

        return saveCharacterAttributes(
          connection,
          character,
          characterAttributes
        ).then(() => {
          return response;
        });
      }
    );
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default createCharacterHandler;
