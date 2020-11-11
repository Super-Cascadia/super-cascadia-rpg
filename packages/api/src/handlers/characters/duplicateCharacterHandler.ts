import { Connection } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { omit } from "lodash";
import { Character } from "../../db/entity/Character";
import { CharacterCreateModel, CharacterModel } from "src/interfaces";
import { getCharacterById } from "../../db/selectors/characters";

async function duplicateCharacterById(
  connection: Connection,
  id: string
): Promise<CharacterModel> {
  return getCharacterById(connection, id).then((characterToDuplicate) => {
    const newItemBody = omit<CharacterCreateModel>(characterToDuplicate, id);
    const newItem = connection.manager.insert(Character, newItemBody);
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
