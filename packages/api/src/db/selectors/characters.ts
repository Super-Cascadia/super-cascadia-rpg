import { Connection } from "typeorm";
import { Character } from "../entity/Character";
import { CharacterAttributes } from "../entity/CharacterAttributes";

export async function findCharacters(connection: Connection) {
  return connection.manager.find(Character);
}

export async function getCharacterById(
  connection: Connection,
  id: string
): Promise<Character | undefined> {
  return connection.manager.findOne<Character>(Character, id);
}

export async function getCharacterAttributes(
  connection: Connection,
  id: string
): Promise<CharacterAttributes | undefined> {
  return connection.manager.findOne<CharacterAttributes>(CharacterAttributes, {
    where: { characterId: id },
  });
}
