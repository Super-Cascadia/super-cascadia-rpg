import {Request, ResponseToolkit, Server} from "@hapi/hapi";
import {Connection} from "typeorm";
import {ItemModel} from '../../model/items/itemModel';
import {map} from 'lodash'
import {Item} from '../../db/entity/Item';

function mapItemtoItemModel(items: Item[]): ItemModel[] {
    return map(items, (item: Item) => {
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            type: item.type
        } as ItemModel
    });
}

async function getAllItems(connection: Connection): Promise<ItemModel[]> {
    const items = await connection.manager.find(Item);

    return mapItemtoItemModel(items);
}

async function getItemById(connection: Connection, id: string): Promise<ItemModel[]> {
    const items = await connection.manager.findByIds(Item, [id]);

    return mapItemtoItemModel(items)
}

export const itemRoutes = (server: Server, connection: Connection) => {
    server.route({
        method: 'GET',
        path: '/items/{id?}',
        handler: async (request: Request, reply: ResponseToolkit): Promise<ItemModel[]> => {

            if (request.params.id) {
                return Promise.resolve(await getItemById(connection, request.params.id));
            } else {
                return Promise.resolve(await getAllItems(connection));
            }
        }
    });
};
