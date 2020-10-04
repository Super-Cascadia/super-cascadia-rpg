import { Request, RequestQuery, ResponseToolkit } from "@hapi/hapi";
import { ItemModel } from "../../model/items/itemModel";
import { Item } from "../../db/entity/Item";
import { Connection } from "typeorm/index";
import { map } from "lodash";

function mapItemtoItemModel(items: Item[]): ItemModel[] {
  return map(items, (item: Item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      type: item.type,
    } as ItemModel;
  });
}

async function findItems(connection: Connection, query: RequestQuery) {
  if (query.type) {
    return connection.manager.find(Item, {
      where: { type: query.type },
    });
  }
  return connection.manager.find(Item);
}

async function getAllItems(
  connection: Connection,
  request: Request
): Promise<ItemModel[]> {
  const foo = request.query;
  console.log("queryParams", foo);
  const items = await findItems(connection, foo);

  return mapItemtoItemModel(items);
}

export async function getItemById(
  connection: Connection,
  id: string
): Promise<Item | undefined> {
  return connection.manager.findOne(Item, id);
}

export const getItemsHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<ItemModel[] | Item | undefined | string> => {
  try {
    if (request.params.id) {
      const item = await getItemById(connection, request.params.id);

      if (!item) {
        return "item not found";
      }

      return item;
    } else {
      console.info("GET all items", request.params);
      return getAllItems(connection, request);
    }
  } catch (e) {
    return Promise.resolve(e);
  }
};
