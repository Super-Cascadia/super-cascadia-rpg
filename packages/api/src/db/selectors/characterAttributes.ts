import { Connection } from "typeorm";
import { CharacterAttributes } from "../entity/CharacterAttributes";

export async function getAllCharacterAttributes(connection: Connection) {
  return connection.manager.find(CharacterAttributes);
}

export async function getCharacterAttributesById(
  connection: Connection,
  id: string
): Promise<CharacterAttributes | undefined> {
  return connection.manager.findOne<CharacterAttributes>(
    CharacterAttributes,
    id
  );
}

export async function getCharacterAttributes(
  connection: Connection,
  id: string
): Promise<CharacterAttributes | undefined> {
  return connection.manager.findOne<CharacterAttributes>(CharacterAttributes, {
    where: { characterId: id },
  });
}
