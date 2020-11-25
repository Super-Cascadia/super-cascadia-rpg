import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { createNewItem } from "../../db/selectors/items";
import { Item } from "../../db/entity/Item";

const createItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  try {
    return createNewItem(connection, request.payload as Item);
  } catch (e) {
    return Promise.resolve(e);
  }
};

export default createItemHandler;
