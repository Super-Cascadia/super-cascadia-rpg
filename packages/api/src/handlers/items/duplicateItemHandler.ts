import { Item } from "../../db/entity/Item";
import { Connection } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { ItemCreateModel, ItemModel } from "../../model/items/itemModel";
import { omit } from "lodash";
import { getItemById } from "../../db/selectors/items";

async function duplicateItemById(
  connection: Connection,
  id: string
): Promise<ItemModel> {
  return getItemById(connection, id).then((itemToDuplicate) => {
    const newItemBody = omit<ItemCreateModel>(itemToDuplicate, id);
    const newItem = connection.manager.insert(Item, newItemBody);
    // @ts-ignore
    return newItem as ItemModel;
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
