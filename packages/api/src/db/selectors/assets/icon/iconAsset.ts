import { Connection, InsertResult } from "typeorm";
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
