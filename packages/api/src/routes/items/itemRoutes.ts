import {Request, ResponseToolkit, Server} from "@hapi/hapi";
import {Connection} from "typeorm";
import {ItemModel} from '../../model/items/itemModel';
import { map } from 'lodash'
import { Item } from '../../db/entity/Item';

export const itemRoutes = (server: Server, connection: Connection) => {
    server.route({
        method: 'GET',
        path: '/items',
        handler: async (request: Request, reply: ResponseToolkit): Promise<ItemModel[]> => {
            let items = await connection.manager.find(Item);

            const itemModels: ItemModel[] = map(items, (item: Item) => {
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    type: item.type
                } as ItemModel
            });

            return Promise.resolve(itemModels);
        }
    });
};
