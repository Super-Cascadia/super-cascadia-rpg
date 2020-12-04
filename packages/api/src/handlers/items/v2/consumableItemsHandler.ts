import { Connection, InsertResult } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import {
  createNewWeaponItem,
  findWeaponItems,
} from "../../../db/selectors/items/v2/item";
import { BasicWeaponItem } from "../../../db/entity/items/equippables/BasicWeaponItem";

export const getConsumableItemsHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<BasicWeaponItem[]> => {
  try {
    return findWeaponItems(connection);
  } catch (e) {
    return Promise.resolve(e);
  }
};

export const createConsumableItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  return createNewWeaponItem(
    connection,
    request.payload as BasicWeaponItem
  ).catch((e) => {
    console.error(e);
    throw e;
  });
};
