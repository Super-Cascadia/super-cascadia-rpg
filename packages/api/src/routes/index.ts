import { Server } from "@hapi/hapi";
import { itemRoutes } from "./items/itemRoutes";
import { characterRoutes } from "./characters/characterRoutes";
import { Connection } from "typeorm";

export const registerRoutes = (server: Server, connection: Connection) => {
  characterRoutes(server, connection);
  itemRoutes(server, connection);
};
