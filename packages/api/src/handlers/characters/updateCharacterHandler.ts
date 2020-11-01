import { Connection, UpdateResult } from "typeorm/index";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { Character } from '../../db/entity/Character';

async function updateCharacterById(
    connection: Connection,
    id: string,
    data: Character
): Promise<UpdateResult> {
    return connection.manager.update<Character>(Character, id, data);
}

const updateCharacterHandler = async (
    connection: Connection,
    request: Request,
    reply: ResponseToolkit
): Promise<Character | UpdateResult> => {
    try {
        console.info("update items", request.payload);
        return updateCharacterById(
            connection,
            request.params.id,
            request.payload as Character
        );
    } catch (e) {
        console.error("error", e);
        return Promise.resolve(e);
    }
};

export default updateCharacterHandler;
