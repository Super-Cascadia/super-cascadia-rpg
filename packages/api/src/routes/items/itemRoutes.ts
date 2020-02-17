import {Request, ResponseToolkit, Server} from "@hapi/hapi";
import { ItemType, Item } from 'src/model/items/itemModel';
import {cheese, ironSword, ironBracers} from '../../model/items/fixtures/itemModelFixtures';

export const itemRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/items',
        handler: (request: Request, reply: ResponseToolkit): Item[] => {
            console.log('hello world!');

            const itemType = request.query.itemType;

            return [
                cheese,
                ironSword,
                ironBracers
            ];
        }
    });
};
