import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection, DeleteResult } from "typeorm";
import { Item } from "../../db/entity/Item";
import { getItemsHandler } from "../../handlers/items/getItemsHandler";
import createItemHandler from "../../handlers/items/createItemHandler";
import duplicateItemHandler from "../../handlers/items/duplicateItemHandler";

async function deleteItemById(
  connection: Connection,
  id: string
): Promise<DeleteResult> {
  return connection.manager.delete(Item, id);
}

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
    handler: async (request: Request, reply: ResponseToolkit): Promise<{}> => {
      try {
        console.info("request", request.payload);
        return deleteItemById(connection, request.params.id);
      } catch (e) {
        console.error("error", e);
        return Promise.resolve(e);
      }
    },
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

export const itemRoutes = (server: Server, connection: Connection) => {
  getItems(server, connection);
  createItem(server, connection);
  deleteItem(server, connection);
  duplicateItem(server, connection);
};