import { Item } from "../../db/entity/Item";
import { getItemById } from "./getItemsHandler";
import { Connection, InsertResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";

async function createNewItem(
  connection: Connection,
  item: Item
): Promise<InsertResult> {
  console.log("item", item);

  return connection.manager.insert(Item, item);
}

const createItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<Item | undefined | string> => {
  try {
    if (request.params.id) {
      return getItemById(connection, request.params.id);
    } else {
      return Promise.resolve(`doesn't exist`);
    }
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default createItemHandler;
