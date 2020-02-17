import {Request, ResponseToolkit, Server} from "@hapi/hapi";
import {itemRoutes} from "./items/itemRoutes";

export const registerRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, reply: ResponseToolkit) => {
            console.log('hello world!');

            return 'Hello World!';
        }
    });

    itemRoutes(server)
};
