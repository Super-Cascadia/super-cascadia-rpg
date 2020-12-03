import { Connection, InsertResult } from "typeorm";
import { BasicArmorItem } from "../../../entity/items/equippables/BasicArmorItem";

export async function findArmorItems(connection: Connection) {
  return connection.manager.find(BasicArmorItem);
}

export async function createNewArmorItem(
  connection: Connection,
  item: BasicArmorItem
): Promise<InsertResult> {
  return connection.manager.insert(BasicArmorItem, item);
}
