import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import {
  createArmorItemHandler,
  getArmorItemsHandler,
} from "../../../handlers/items/v2/getArmorItemsHandler";

export const itemRoutesV2 = (server: Server, connection: Connection) => {
  server.route({
    method: "GET",
    path: "/items/v2/armor/{id?}",
    handler: (request: Request, reply: ResponseToolkit) =>
      getArmorItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: "/items/v2/armor",
    handler: (request: Request, reply: ResponseToolkit) =>
      createArmorItemHandler(connection, request, reply),
  });
};
