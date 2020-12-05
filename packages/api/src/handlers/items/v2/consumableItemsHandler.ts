import { Connection, InsertResult } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import {
  findConsumableItems,
  createNewConsumableItem,
} from "../../../db/selectors/items/v2/item";
import { BasicConsumableItem } from "../../../db/entity/items/v2/consumables/BasicConsumableItem";

export const getConsumableItemsHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<BasicConsumableItem[]> => {
  try {
    return findConsumableItems(connection);
  } catch (e) {
    return Promise.resolve(e);
  }
};

export const createConsumableItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  return createNewConsumableItem(
    connection,
    request.payload as BasicConsumableItem
  ).catch((e) => {
    console.error(e);
    throw e;
  });
};
