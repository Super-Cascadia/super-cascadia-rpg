import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { Connection } from "typeorm";
import { getCharacterAttributesHandler } from "../../handlers/characterAttributes/getCharacterAttributesHandler";

function getCharacterAttributes(server: Server, connection: Connection) {
  server.route({
    method: "GET",
    path: "/characterAttributes/{id?}",
    handler: async (request: Request, reply: ResponseToolkit) =>
      getCharacterAttributesHandler(connection, request),
  });
}

export const characterAttributeRoutes = (
  server: Server,
  connection: Connection
) => {
  getCharacterAttributes(server, connection);
};
