import { Connection, DeleteResult } from "typeorm";
import { Request } from "@hapi/hapi";
import { CharacterInventory } from "../../db/entity/CharacterInventory";

export async function deleteCharacterInventoryHandler(
  connection: Connection,
  request: Request
): Promise<DeleteResult> {
  try {
    console.info("request", request.payload);
    return connection.manager.delete(CharacterInventory, request.params.id);
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
}
