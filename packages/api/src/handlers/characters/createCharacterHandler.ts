import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { createNewCharacter } from "../../db/selectors/characters";
import { Character } from "../../db/entity/Character";

const createCharacterHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  try {
    return createNewCharacter(connection, request.payload as Character);
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default createCharacterHandler;
