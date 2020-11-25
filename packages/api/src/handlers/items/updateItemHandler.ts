import { Item } from "../../db/entity/Item";
import { Connection, UpdateResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { updateItemById } from "../../db/selectors/items";

const updateItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<Item | UpdateResult> => {
  try {
    console.info("update items", request.payload);
    return updateItemById(
      connection,
      request.params.id,
      request.payload as Item
    );
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default updateItemHandler;
