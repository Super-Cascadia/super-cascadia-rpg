import { Connection } from "typeorm";
import { Character } from "../entity/Character";
import { CharacterAttributes } from "../entity/CharacterAttributes";
import { RequestQuery } from "@hapi/hapi";
import { filter, includes, split } from "lodash";

export async function findCharacters(connection: Connection) {
  return connection.manager.find(Character);
}

enum CHARACTER_TABLE_RELATIONSHIPS {
  CHARACTER_ATTRIBUTES = "characterAttributes",
}

function filterListToLegalRelations(details: string) {
  const legalDetails = [CHARACTER_TABLE_RELATIONSHIPS.CHARACTER_ATTRIBUTES];
  const detailsArray = split(details, ",");

  return filter(detailsArray, (item) => {
    return includes(legalDetails, item);
  });
}

export async function getCharacterById(
  connection: Connection,
  id: string,
  query?: RequestQuery
): Promise<Character | undefined> {
  const details = query?.details as string;

  if (details) {
    const filteredArray = filterListToLegalRelations(details);

    return connection.manager.findOne<Character>(Character, id, {
      relations: filteredArray,
    });
  }

  return connection.manager.findOne<Character>(Character, id);
}

export async function getCharacterByIdWithRelations(
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
