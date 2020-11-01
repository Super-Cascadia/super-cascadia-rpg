import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import { getCharactersHandler } from "../../handlers/characters/getCharactersHandler";
import updateItemHandler from "../../handlers/items/updateItemHandler";
import updateCharacterHandler from "../../handlers/characters/updateCharacterHandler";

function getCharacters(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/characters/{id?}",
    handler: (request: Request, reply: ResponseToolkit) => {
      return getCharactersHandler(connection, request, reply);
    },
  });
}

function createCharacter(server: Server, connection: Connection) {
  server.route({
    method: "POST",
    path: "/characters",
    handler: async (request: Request, reply: ResponseToolkit) =>
      updateCharacterHandler(connection, request, reply),
  });
}

function updateCharacter(server: Server, connection: Connection) {
  server.route({
    method: "PUT",
    path: "/characters/{id}",
    handler: async (request: Request, reply: ResponseToolkit) =>
        updateItemHandler(connection, request, reply),
  });
}

export const characterRoutes = (server: Server, connection: Connection) => {
  getCharacters(server, connection);
  createCharacter(server, connection);
  updateCharacter(server, connection);
};
