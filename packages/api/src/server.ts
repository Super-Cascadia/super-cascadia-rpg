"use strict";

import { Server } from "@hapi/hapi";
import { registerRoutes } from "./routes";
import { createConnection } from "typeorm";
import Qs from "qs";

async function getDatabaseConnection() {
  return createConnection().then(async (connection) => {
    return connection;
  });
}

export const init = async () => {
  const server = new Server({
    port: 5000,
    query: {
      parser: (query: unknown) => Qs.parse(query as string),
    },
  });

  const connection = await getDatabaseConnection();

  registerRoutes(server, connection);

  await server.start();

  console.log("Server running on %s", server.info.uri);

  await server.start();
};

init();
