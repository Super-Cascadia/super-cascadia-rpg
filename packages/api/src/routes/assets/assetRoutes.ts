import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import {
  createIconAssetHandler,
  getIconAssetHandler,
} from "../../handlers/assets/icons/iconAssetsHandler";

enum ASSET_API_BASE_PATH {
  ICON = "icon",
}

function iconAssetRoutes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: `/assets/${ASSET_API_BASE_PATH.ICON}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      getIconAssetHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: `/assets/${ASSET_API_BASE_PATH.ICON}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      createIconAssetHandler(connection, request, reply),
  });
}

export const assetRoutes = (server: Server, connection: Connection) => {
  iconAssetRoutes(server, connection);
};
