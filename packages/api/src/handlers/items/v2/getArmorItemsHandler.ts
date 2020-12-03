import { Connection, InsertResult } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import {
  createNewArmorItem,
  findArmorItems,
} from "../../../db/selectors/items/v2/armorItems";
import { BasicArmorItem } from "../../../db/entity/items/equippables/BasicArmorItem";

export const getArmorItemsHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<BasicArmorItem[]> => {
  try {
    return findArmorItems(connection);
  } catch (e) {
    return Promise.resolve(e);
  }
};

export const createArmorItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  try {
    return createNewArmorItem(
      connection,
      request.payload as BasicArmorItem
    ).catch((e) => {
      console.error(e);
      throw e;
    });
  } catch (e) {
    return Promise.resolve(e);
  }
};
