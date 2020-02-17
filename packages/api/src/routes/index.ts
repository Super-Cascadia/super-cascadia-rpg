import {Request, ResponseToolkit, Server} from "@hapi/hapi";

enum ItemType {
    FOOD,
    WEAPON,
    ARMOR,
    ACCESSORY,
    KEY_ITEM,
}

interface Item {
    id: number;
    name: string;
    value: number;
    description: string;
    type: ItemType
}

export const registerRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request: Request, reply: ResponseToolkit) => {
            console.log('hello world!');

            return 'Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/items',
        handler: (request: Request, reply: ResponseToolkit): Item[] => {
            console.log('hello world!');

            return [
                {
                    id: 1,
                    name: 'Cheese',
                    value: 123,
                    description: "Description",
                    type: ItemType.FOOD
                }
            ];
        }
    });
};
