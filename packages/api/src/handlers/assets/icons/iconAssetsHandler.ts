import { Connection, InsertResult } from "typeorm";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { IconAsset } from "../../../db/entity/assets/icons/IconAsset";
import {
  createNewIconAsset,
  findIconAssets,
} from "../../../db/selectors/assets/icon/iconAsset";

export const getIconAssetHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<IconAsset[]> => {
  try {
    return findIconAssets(connection);
  } catch (e) {
    return Promise.resolve(e);
  }
};

export const createIconAssetHandler = async (
  connection: Connection,
  request: Request,
  reply: ResponseToolkit
): Promise<InsertResult> => {
  return createNewIconAsset(connection, request.payload as IconAsset).catch(
    (e) => {
      console.error(e);
      throw e;
    }
  );
};
