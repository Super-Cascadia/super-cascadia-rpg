import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import {
  createArmorItemHandler,
  getArmorItemsHandler,
} from "../../../handlers/items/v2/armorItemHandlers";
import {
  createWeaponItemHandler,
  getWeaponItemsHandler,
  updateWeaponItemHandler,
} from "../../../handlers/items/v2/weaponItemHandler";
import {
  createConsumableItemHandler,
  getConsumableItemsHandler,
} from "../../../handlers/items/v2/consumableItemsHandler";

const BASE_ITEM_API_PATH = "/items/v2";

enum ITEM_TYPE {
  ARMOR = "armor",
  WEAPON = "weapon",
  CONSUMABLE = "consumable",
}

function armorItemRoutes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: `${BASE_ITEM_API_PATH}/${ITEM_TYPE.ARMOR}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      getArmorItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: `${BASE_ITEM_API_PATH}/${ITEM_TYPE.ARMOR}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      createArmorItemHandler(connection, request, reply),
  });
}

function weaponItemRoutes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: `${BASE_ITEM_API_PATH}/${ITEM_TYPE.WEAPON}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      getWeaponItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: `${BASE_ITEM_API_PATH}/${ITEM_TYPE.WEAPON}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      createWeaponItemHandler(connection, request, reply),
  });

  server.route({
    method: "PUT",
    path: `${BASE_ITEM_API_PATH}/${ITEM_TYPE.WEAPON}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      updateWeaponItemHandler(connection, request, reply),
  });
}

function consumableItemRoutes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: `${BASE_ITEM_API_PATH}/${ITEM_TYPE.CONSUMABLE}/{id?}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      getConsumableItemsHandler(connection, request, reply),
  });

  server.route({
    method: "POST",
    path: `${BASE_ITEM_API_PATH}/${ITEM_TYPE.CONSUMABLE}`,
    handler: (request: Request, reply: ResponseToolkit) =>
      createConsumableItemHandler(connection, request, reply),
  });
}

export const itemRoutesV2 = (server: Server, connection: Connection) => {
  armorItemRoutes(server, connection);
  weaponItemRoutes(server, connection);
  consumableItemRoutes(server, connection);
};
