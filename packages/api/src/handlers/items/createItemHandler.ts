import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { createNewItem } from "../../db/selectors/items";

const createItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  console.info("create item handler");
  try {
    console.info("create new item", request.payload);
    return createNewItem(connection, request);
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default createItemHandler;
