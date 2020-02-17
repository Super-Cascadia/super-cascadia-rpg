'use strict';

import { Server } from '@hapi/hapi';
import {registerRoutes} from "./routes";

export const init = async () => {
    const server = new Server({
        port: 3000,
    });

    registerRoutes(server);

    await server.start();

    console.log('Server running on %s', server.info.uri);

    await server.start();
};

init();
