import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import createCharacterHandler from "../../handlers/characters/createCharacterHandler";
import { getCharactersHandler } from "../../handlers/characters/getCharactersHandler";

function getCharacters(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/characters",
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

export const characterRoutes = (server: Server, connection: Connection) => {
  getCharacters(server, connection);
  createCharacter(server, connection);
};
