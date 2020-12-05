import { Connection } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { omit } from "lodash";
import { Character } from "../../db/entity/characters/Character";
import { CharacterCreateModel, CharacterModel } from "src/interfaces";
import {
  createNewCharacter,
  getCharacterById,
} from "../../db/selectors/characters/characters";

async function duplicateCharacterById(
  connection: Connection,
  id: string
): Promise<CharacterModel> {
  return getCharacterById(connection, id).then((characterToDuplicate) => {
    const newItemBody = omit<CharacterCreateModel>(characterToDuplicate, id);
    const newItem = createNewCharacter(connection, newItemBody as Character);
    // @ts-ignore
    return newItem as CharacterModel;
  });
}

const duplicateCharacterHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<CharacterModel | undefined | string> => {
  try {
    console.info("duplicate character", request.payload);
    return duplicateCharacterById(connection, request.params.id);
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default duplicateCharacterHandler;
