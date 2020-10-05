import { Request, ResponseToolkit } from "@hapi/hapi";
import { ItemModel } from "../../model/items/itemModel";
import { Item } from "../../db/entity/Item";
import { Connection } from "typeorm/index";
import { mapItemToItemModel } from "../../utils/mappings/items";
import { findItems, getItemById } from "../../db/selectors/items";

async function getAllItems(
  connection: Connection,
  request: Request
): Promise<ItemModel[]> {
  const foo = request.query;
  console.log("queryParams", foo);
  const items = await findItems(connection, foo);

  return mapItemToItemModel(items);
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
