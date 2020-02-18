import {Server} from "@hapi/hapi";
import {itemRoutes} from "./items/itemRoutes";
import {helloWorldRoutes} from "./hello-world/helloWorld";
import {characterRoutes} from "./characters/characterRoutes";
import {Connection} from "typeorm";

export const registerRoutes = (server: Server, connection: Connection) => {
    characterRoutes(server);
    helloWorldRoutes(server);
    itemRoutes(server, connection);
};
