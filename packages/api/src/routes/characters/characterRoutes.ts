import {Request, ResponseToolkit, Server} from "@hapi/hapi";
import { Character } from '../../model/characters/characterModel';
import { crono } from '../../model/characters/fixtures/characterModelFixtures';

export const characterRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/characters',
        handler: (request: Request, reply: ResponseToolkit): Character[] => {
            return [
                crono
            ];
        }
    });
};
