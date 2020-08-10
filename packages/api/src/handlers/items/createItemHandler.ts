import { Item } from "../../db/entity/Item";
import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";

async function createNewItem(
  connection: Connection,
  request: Request
): Promise<InsertResult> {
  console.log("item", request.payload);

  return connection.manager.insert(Item, request.payload as Item);
}

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
