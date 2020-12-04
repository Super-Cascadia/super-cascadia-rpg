import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import {
  createArmorItemHandler,
  getArmorItemsHandler,
} from "../../../handlers/items/v2/armorItemHandlers";
import {
  createWeaponItemHandler,
  getWeaponItemsHandler,
} from "../../../handlers/items/v2/weaponItemHandler";

export const itemRoutesV2 = (server: Server, connection: Connection) => {
  // Armor

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

  // Weapons

  server.route({
    method: "GET",
    path: "/items/v2/weapon/{id?}",
    handler: (request: Request, reply: ResponseToolkit) =>
      getWeaponItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: "/items/v2/weapon",
    handler: (request: Request, reply: ResponseToolkit) =>
      createWeaponItemHandler(connection, request, reply),
  });
};
