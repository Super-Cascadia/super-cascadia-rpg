'use strict';

import { Request, Server, ResponseToolkit } from '@hapi/hapi';

const init = async () => {
    const server = new Server({
        port: 3000
    });

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

init();
