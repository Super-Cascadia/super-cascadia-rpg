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
import {
  createConsumableItemHandler,
  getConsumableItemsHandler,
} from "../../../handlers/items/v2/consumableItemsHandler";

enum ITEM_API_BASE_PATH {
  ARMOR = "armor",
  WEAPON = "weapon",
  CONSUMABLE = "consumable",
}

function armorItemRoutes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: `/items/v2/${ITEM_API_BASE_PATH.ARMOR}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      getArmorItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: `/items/v2/${ITEM_API_BASE_PATH.ARMOR}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      createArmorItemHandler(connection, request, reply),
  });
}

function weaponItemRoutes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: `/items/v2/${ITEM_API_BASE_PATH.WEAPON}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      getWeaponItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: `/items/v2/${ITEM_API_BASE_PATH.WEAPON}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      createWeaponItemHandler(connection, request, reply),
  });
}

function consumableItemRoutes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: `/items/v2/${ITEM_API_BASE_PATH.CONSUMABLE}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      getConsumableItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: `/items/v2/${ITEM_API_BASE_PATH.CONSUMABLE}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      createConsumableItemHandler(connection, request, reply),
  });
}

export const itemRoutesV2 = (server: Server, connection: Connection) => {
  armorItemRoutes(server, connection);
  weaponItemRoutes(server, connection);
  consumableItemRoutes(server, connection);
};
