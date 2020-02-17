'use strict';

import { Request, Server, ResponseToolkit } from '@hapi/hapi';
// import hapi_postgres_connection from 'hapi-postgres-connection';

export const init = async () => {
    const server = new Server({
        port: 3000,
    });

    // await server.register({ plugin: hapi_postgres_connection }, {});

    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, reply: ResponseToolkit) => {
            console.log('hello world!');

            return 'Hello World!';
        }
    });

    await server.start();

    console.log('Server running on %s', server.info.uri);

    await server.start();
};
