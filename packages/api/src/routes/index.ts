import {Server} from "@hapi/hapi";
import {itemRoutes} from "./items/itemRoutes";
import {helloWorldRoutes} from "./hello-world/helloWorld";
import {characterRoutes} from "./characters/characterRoutes";

export const registerRoutes = (server: Server) => {
    characterRoutes(server);
    helloWorldRoutes(server);
    itemRoutes(server);
};
