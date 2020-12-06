import { Connection, DeleteResult } from "typeorm";
import { Request } from "@hapi/hapi";
import { deleteCharacterInventory } from "../../../db/selectors/characters/characterInventory";

export async function deleteCharacterInventoryHandler(
  connection: Connection,
  request: Request
): Promise<DeleteResult> {
  try {
    return deleteCharacterInventory(connection, request.params.id);
  } catch (e) {
    return Promise.resolve(e);
  }
}
