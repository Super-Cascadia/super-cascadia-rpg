import { Request } from "@hapi/hapi";
import { Connection } from "typeorm";
import { deleteItemById } from "../../db/selectors/items";

export async function deleteItemHandler(
  request: Request,
  connection: Connection
): Promise<any> {
  try {
    console.info("request", request.payload);
    return deleteItemById(connection, request.params.id);
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
}
