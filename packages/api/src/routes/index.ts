import { Server } from "@hapi/hapi";
import { itemRoutesV1 } from "./items/v1/itemRoutesV1";
import { characterRoutes } from "./characters/characterRoutes";
import { Connection } from "typeorm";
import { characterAttributeRoutes } from "./characters/characterAttributeRoutes";
import { itemRoutesV2 } from "./items/v2/itemRoutes";
import { assetRoutes } from "./assets/assetRoutes";

export const registerRoutes = (server: Server, connection: Connection) => {
  characterRoutes(server, connection);
  characterAttributeRoutes(server, connection);
  itemRoutesV1(server, connection);
  itemRoutesV2(server, connection);
  assetRoutes(server, connection);
};
