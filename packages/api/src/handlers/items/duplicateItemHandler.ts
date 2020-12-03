import { Item } from "../../db/entity/Item";
import { Connection } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { ItemCreateModel, ItemModel } from "../../model/items/itemModel";
import { omit } from "lodash";
import { createNewItem, getItemById } from "../../db/selectors/items/v1/items";

async function duplicateItemById(
  connection: Connection,
  id: string
): Promise<Item> {
  return getItemById(connection, id).then((itemToDuplicate) => {
    const newItemBody = omit<ItemCreateModel>(itemToDuplicate, id);
    const newItem = createNewItem(connection, newItemBody as Item);
    // @ts-ignore
    return newItem as Item;
  });
}

const duplicateItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<Item | undefined | string> => {
  try {
    console.info("duplicate items", request.payload);
    return duplicateItemById(connection, request.params.id);
  } catch (e) {
    console.error("error", e);
    return Promise.resolve(e);
  }
};

export default duplicateItemHandler;
