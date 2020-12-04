import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import { getItemsHandler } from "../../handlers/items/v1/getItemsHandler";
import createItemHandler from "../../handlers/items/v1/createItemHandler";
import duplicateItemHandler from "../../handlers/items/v1/duplicateItemHandler";
import updateItemHandler from "../../handlers/items/v1/updateItemHandler";
import { deleteItemHandler } from "../../handlers/items/v1/deleteItemHandler";
import createConsumableItemHandler from "../../handlers/consumableItems/createConsumableItemHandler";

// Generic Items

function getItems(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/items/{id?}",
    handler: (request: Request, reply: ResponseToolkit) =>
      getItemsHandler(connection, request, reply),
  });
}

function createItem(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/items",
    handler: async (request: Request, reply: ResponseToolkit) =>
      createItemHandler(connection, request, reply),
  });
}

function deleteItem(server: Server, connection: Connection) {
  server.route({
    method: "DELETE",
    path: "/items/{id}",
    handler: async (request: Request, reply: ResponseToolkit): Promise<{}> =>
      deleteItemHandler(request, connection),
  });
}

function duplicateItem(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/items/{id}/duplicate",
    handler: async (request: Request, reply: ResponseToolkit) =>
      duplicateItemHandler(connection, request, reply),
  });
}

function updateItem(server: Server, connection: Connection) {
  server.route({
    method: "PUT",
    path: "/items/{id}",
    handler: async (request: Request, reply: ResponseToolkit) =>
      updateItemHandler(connection, request, reply),
  });
}

// Consumable Items

function createConsumableItem(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/consumableItem",
    handler: async (request: Request, reply: ResponseToolkit) =>
      createConsumableItemHandler(connection, request, reply),
  });
}

export const itemRoutesV1 = (server: Server, connection: Connection) => {
  getItems(server, connection);
  createItem(server, connection);
  deleteItem(server, connection);
  duplicateItem(server, connection);
  updateItem(server, connection);
  createConsumableItem(server, connection);
};
