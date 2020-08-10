import { Request, ResponseToolkit } from "@hapi/hapi";
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

async function getAllItems(connection: Connection): Promise<ItemModel[]> {
  const items = await connection.manager.find(Item);

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
  console.info("GET Items", request.params);

  try {
    console.info("GET Items", request.params);
    if (request.params.id) {
      console.info("GET single item", request.params);

      const item = await getItemById(connection, request.params.id);

      if (!item) {
        return "item not found";
      }

      return item;
    } else {
      console.info("GET all items", request.params);
      return getAllItems(connection);
    }
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};
