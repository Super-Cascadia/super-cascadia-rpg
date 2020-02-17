import {Request, ResponseToolkit, Server} from "@hapi/hapi";

export const helloWorldRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, reply: ResponseToolkit) => {
            console.log('hello world!');

            return 'Hello World!';
        }
    });
};
