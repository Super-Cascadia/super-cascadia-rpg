import { Connection, DeleteResult } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { deleteCharacter } from "../../db/selectors/characters/characters";

export async function deleteCharacterHandler(
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<DeleteResult> {
  try {
    return deleteCharacter(connection, request);
  } catch (e) {
    return Promise.resolve(e);
  }
}
