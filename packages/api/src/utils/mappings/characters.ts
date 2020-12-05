import { Character } from "../../db/entity/characters/Character";
import { CharacterModel } from "../../model/characters/characterModel";
import { map } from "lodash";

function getCharacterModel(character: Character): CharacterModel {
  return {
    id: character.id,
    firstName: character.firstName,
    lastName: character.lastName,
    description: character.description,
    primaryClass: character.primaryClass,
  } as CharacterModel;
}

export function mapCharacterToCharacterModel(
  characters: Character[]
): CharacterModel[] {
  return map(characters, (character: Character) =>
    getCharacterModel(character)
  );
}
