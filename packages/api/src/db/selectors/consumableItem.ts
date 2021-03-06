import { Connection, InsertResult } from "typeorm";
import { ConsumableItem } from "../entity/characters/ConsumableItem";

export async function createNewConsumableItem(
  connection: Connection,
  item: ConsumableItem
): Promise<InsertResult> {
  return connection.manager.insert(ConsumableItem, item);
}
