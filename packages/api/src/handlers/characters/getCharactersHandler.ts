import { Connection } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { CharacterModel } from "../../model/characters/characterModel";
import { mapCharacterToCharacterModel } from "../../utils/mappings/characters";
import {
  findCharacters,
  getCharacterById,
} from "../../db/selectors/characters";

async function getAllCharacters(
  connection: Connection,
  request: Request
): Promise<CharacterModel[]> {
  const characters = await findCharacters(connection);

  return mapCharacterToCharacterModel(characters);
}

export const getCharactersHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<CharacterModel[] | CharacterModel | string> => {
  try {
    if (request.params.id) {
      const item = await getCharacterById(connection, request.params.id);

      if (!item) {
        return "item not found";
      }

      return item as CharacterModel;
    } else {
      return getAllCharacters(connection, request);
    }
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
