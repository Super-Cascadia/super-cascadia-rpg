import { Connection, InsertResult } from "typeorm";
import { Character } from "../entity/Character";
import { Request, RequestQuery } from "@hapi/hapi";
import { filter, includes, split } from "lodash";

export async function findCharacters(connection: Connection) {
  return connection.manager.find(Character);
}

enum CHARACTER_TABLE_RELATIONSHIPS {
  ATTRIBUTES = "attributes",
}

function filterListToLegalRelations(details: string) {
  const legalDetails = [CHARACTER_TABLE_RELATIONSHIPS.ATTRIBUTES];
  const detailsArray = split(details, ",");

  return filter(detailsArray, (item) => {
    return includes(legalDetails, item);
  });
}

export async function getCharacterById(
  connection: Connection,
  characterId: string,
  query?: RequestQuery
): Promise<Character | undefined> {
  const details = query?.details as string;

  if (details) {
    const filteredArray = filterListToLegalRelations(details);

    return connection.manager.findOne<Character>(Character, characterId, {
      relations: filteredArray,
    });
  }

  return connection.manager.findOne<Character>(Character, characterId);
}

export async function createNewCharacter(
  connection: Connection,
  request: Request
): Promise<InsertResult> {
  return connection.manager.insert(Character, request.payload as Character);
}

export async function deleteCharacter(
  connection: Connection,
  request: Request
) {
  return connection.manager.delete(Character, request.params.id);
}
