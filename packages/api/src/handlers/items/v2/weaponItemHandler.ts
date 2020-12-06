import { Connection, InsertResult, UpdateResult } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import {
  createNewWeaponItem,
  findWeaponItems,
  updateWeaponItem,
} from "../../../db/selectors/items/v2/item";
import { BasicWeaponItem } from "../../../db/entity/items/v2/equippables/BasicWeaponItem";
import { prepareUpdateBasicWeaponItem } from "./util";

export const getWeaponItemsHandler = async (
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

export const createWeaponItemHandler = async (
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

export const updateWeaponItemHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<UpdateResult> => {
  const id = request.params.id;

  const updatedItem = prepareUpdateBasicWeaponItem(
    request.payload as BasicWeaponItem
  );

  return updateWeaponItem(connection, id, updatedItem).catch((e) => {
    console.error(e);
    throw e;
  });
};
