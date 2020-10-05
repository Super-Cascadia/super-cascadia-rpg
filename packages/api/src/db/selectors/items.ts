import { Connection } from "typeorm";
import { RequestQuery } from "@hapi/hapi";
import { Item } from "../entity/Item";

export async function findItems(connection: Connection, query: RequestQuery) {
  if (query.type) {
    return connection.manager.find(Item, {
      where: { type: query.type },
    });
  }
  return connection.manager.find(Item);
}

export async function getItemById(
  connection: Connection,
  id: string
): Promise<Item | undefined> {
  return connection.manager.findOne(Item, id);
}
