import { Server } from "@hapi/hapi";
import { itemRoutes } from "./items/itemRoutes";
import { characterRoutes } from "./characters/characterRoutes";
import { Connection } from "typeorm";
import { characterAttributeRoutes } from "./characters/characterAttributeRoutes";
import { itemRoutesV2 } from "./items/v2/itemRoutes";

export const registerRoutes = (server: Server, connection: Connection) => {
  characterRoutes(server, connection);
  characterAttributeRoutes(server, connection);
  itemRoutes(server, connection);
  itemRoutesV2(server, connection);
};
