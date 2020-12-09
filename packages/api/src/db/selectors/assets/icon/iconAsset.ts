import { Connection, InsertResult, UpdateResult } from "typeorm";
import { IconAsset } from "../../../entity/assets/icons/IconAsset";

export async function findIconAssets(connection: Connection) {
  return connection.manager.find(IconAsset);
}

export async function createNewIconAsset(
  connection: Connection,
  item: IconAsset
): Promise<InsertResult> {
  return connection.manager.insert(IconAsset, item);
}

export async function updateIconAsset(
  connection: Connection,
  item: IconAsset
): Promise<UpdateResult> {
  return connection.manager.update(IconAsset, item.id, item);
}
