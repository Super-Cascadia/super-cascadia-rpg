import { Connection, UpdateResult } from "typeorm";
import { CharacterAttributes } from "../entity/CharacterAttributes";
import { Character } from "../entity/Character";

export async function getAllCharacterAttributes(connection: Connection) {
  return connection.manager.find(CharacterAttributes);
}

export async function getCharacterAttributesById(
  connection: Connection,
  id: string
): Promise<CharacterAttributes | undefined> {
  return connection.manager.findOne<CharacterAttributes>(
    CharacterAttributes,
    id
  );
}

export async function getCharacterAttributes(
  connection: Connection,
  id: string
): Promise<CharacterAttributes | undefined> {
  return connection.manager.findOne<CharacterAttributes>(CharacterAttributes, {
    where: { characterId: id },
  });
}

function prepareCharacterAttributesSaveObject(
  response: Character,
  payload: CharacterAttributes
) {
  const character = new Character();
  character.id = response.id;

  const attributes = new CharacterAttributes();
  attributes.strength = payload.strength;
  attributes.dexterity = payload.dexterity;
  attributes.vitality = payload.vitality;
  attributes.intelligence = payload.intelligence;
  attributes.mind = payload.mind;
  attributes.piety = payload.piety;
  attributes.character = character as Character;
  return attributes;
}

export async function saveCharacterAttributes(
  connection: Connection,
  character: Character,
  payload: CharacterAttributes
): Promise<CharacterAttributes | undefined> {
  const attributes = prepareCharacterAttributesSaveObject(character, payload);

  return connection.manager.save(CharacterAttributes, attributes);
}

export async function updateAttributesById(
  connection: Connection,
  id: string,
  data: CharacterAttributes
): Promise<UpdateResult> {
  return connection.manager.update<CharacterAttributes>(
    CharacterAttributes,
    id,
    data
  );
}
