import { Connection, UpdateResult } from "typeorm";
import { CharacterAttributes } from "../../entity/CharacterAttributes";
import { Character } from "../../entity/Character";

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
  character: Character,
  characterAttributes: CharacterAttributes
) {
  const characterObject = new Character();
  const attributes = new CharacterAttributes();

  characterObject.id = character.id;

  attributes.strength = characterAttributes.strength;
  attributes.dexterity = characterAttributes.dexterity;
  attributes.vitality = characterAttributes.vitality;
  attributes.intelligence = characterAttributes.intelligence;
  attributes.mind = characterAttributes.mind;
  attributes.piety = characterAttributes.piety;
  attributes.character = characterObject as Character;

  return attributes;
}

export async function saveCharacterAttributes(
  connection: Connection,
  character: Character,
  characterAttributes: CharacterAttributes
): Promise<CharacterAttributes | undefined> {
  const attributes = prepareCharacterAttributesSaveObject(
    character,
    characterAttributes
  );

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
