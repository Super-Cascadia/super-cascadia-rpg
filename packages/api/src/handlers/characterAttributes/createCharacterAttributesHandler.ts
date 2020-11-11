import { Connection, InsertResult } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterAttributes } from "../../db/entity/CharacterAttributes";
import { getCharacterById } from "../../db/selectors/characters";
import { Character } from "../../db/entity/Character";

function prepareCharacterAttributesSaveObject(
  response: Character,
  payload: CharacterAttributes
) {
  const character = new Character();
  character.id = response.id;

  const attributes = new CharacterAttributes();
  attributes.strength = payload.strength;
  attributes.dexterity = payload.dexterity;
  attributes.vitality = payload.vitality;
  attributes.intelligence = payload.intelligence;
  attributes.mind = payload.mind;
  attributes.piety = payload.piety;
  attributes.character = character as Character;
  return attributes;
}

const createCharacterAttributesHandler = async (
  connection: Connection,
  request: Request
): Promise<any> => {
  console.info("create character attributes handler");
  try {
    const payload = request.payload as CharacterAttributes;
    console.info("create new attributes for character", request.payload);

    return getCharacterById(connection, request.params.id).then(
      (response: Character | undefined) => {
        if (response) {
          const attributes = prepareCharacterAttributesSaveObject(
            response,
            payload
          );

          return connection.manager.save(CharacterAttributes, attributes);
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
