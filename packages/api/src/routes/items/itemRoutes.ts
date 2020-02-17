import {Request, ResponseToolkit, Server} from "@hapi/hapi";
import { ItemType, Item } from 'src/model/item/itemModel';
import {cheese} from '../../model/item/fixtures/itemModelFixtures';

export const itemRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/itemRoutes',
        handler: (request: Request, reply: ResponseToolkit): Item[] => {
            console.log('hello world!');

            return [
                cheese
            ];
        }
    });
}
