import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { createNewCharacter } from "../../db/selectors/characters";

const createCharacterHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  console.info("create character handler");
  try {
    console.info("create new character", request.payload);
    return createNewCharacter(connection, request);
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default createCharacterHandler;
