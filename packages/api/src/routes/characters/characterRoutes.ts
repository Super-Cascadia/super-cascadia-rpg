import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import { getCharactersHandler } from "../../handlers/characters/getCharactersHandler";
import createCharacterHandler from "../../handlers/characters/createCharacterHandler";
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
      createCharacterHandler(connection, request, reply),
  });
}

function updateCharacter(server: Server, connection: Connection) {
  server.route({
    method: "PUT",
    path: "/characters/{id}",
    handler: async (request: Request, reply: ResponseToolkit) =>
        updateCharacterHandler(connection, request, reply),
  });
}

export const characterRoutes = (server: Server, connection: Connection) => {
  getCharacters(server, connection);
  createCharacter(server, connection);
  updateCharacter(server, connection);
};
