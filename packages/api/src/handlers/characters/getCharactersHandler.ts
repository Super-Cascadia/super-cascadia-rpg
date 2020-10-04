import { Connection } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { CharacterModel } from "../../model/characters/characterModel";
import { Character } from "../../db/entity/Character";
import { map } from "lodash";

async function getCharacterById(
  connection: Connection,
  id: string
): Promise<Character | undefined> {
  return connection.manager.findOne(Character, id);
}

function mapCharacterToCharacterModel(
  characters: Character[]
): CharacterModel[] {
  return map(characters, (character: Character) => {
    return {
      id: character.id,
      firstName: character.firstName,
      lastName: character.lastName,
      description: character.description,
      primaryClass: character.primaryClass,
    } as CharacterModel;
  });
}

async function findCharacters(connection: Connection) {
  return connection.manager.find(Character);
}

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
): Promise<CharacterModel[] | Character | undefined | string> => {
  try {
    if (request.params.id) {
      const character = await getCharacterById(connection, request.params.id);

      if (!character) {
        return "charater not found";
      }

      return character;
    } else {
      return getAllCharacters(connection, request);
    }
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
