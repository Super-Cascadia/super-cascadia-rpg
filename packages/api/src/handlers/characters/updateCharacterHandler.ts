import { Connection, UpdateResult } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { Character } from "../../db/entity/Character";
import { updateCharacterById } from "../../db/selectors/characters";

const updateCharacterHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<Character | UpdateResult> => {
  try {
    return updateCharacterById(
      connection,
      request.params.id,
      request.payload as Character
    );
  } catch (e) {
    return Promise.resolve(e);
  }
};

export default updateCharacterHandler;
