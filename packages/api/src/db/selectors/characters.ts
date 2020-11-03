import {Connection} from "typeorm";
import {Character} from "../entity/Character";

export async function findCharacters(connection: Connection) {
    return connection.manager.find(Character);
}

export async function getCharacterById(
    connection: Connection,
    id: string
): Promise<Character | undefined> {
    return connection.manager.findOne(Character, id);
}
