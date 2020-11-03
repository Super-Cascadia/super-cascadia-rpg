import {Connection, DeleteResult} from "typeorm";
import {Character} from "../../db/entity/Character";
import {Request, ResponseToolkit} from "@hapi/hapi";

export async function deleteCharacterHandler(
    connection: Connection,
    request: Request,
    reply: ResponseToolkit
): Promise<DeleteResult> {
    try {
        console.info("request", request.payload);
        return connection.manager.delete(Character, request.params.id);
    } catch (e) {
        console.error("error", e);
        return Promise.resolve(e);
    }

}
