import {Server} from "@hapi/hapi";
import {itemRoutes} from "./items/itemRoutes";
import {helloWorldRoutes} from "./hello-world/helloWorld";

export const registerRoutes = (server: Server) => {
    helloWorldRoutes(server);
    itemRoutes(server);
};
