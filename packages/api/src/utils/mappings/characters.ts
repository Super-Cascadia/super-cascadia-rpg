import { Character } from "../../db/entity/Character";
import { CharacterModel } from "../../model/characters/characterModel";
import { map } from "lodash";

export function mapCharacterToCharacterModel(
  characters: Character[]
): CharacterModel[] {
  return map(characters, (character: Character) => {
    return {
      id: character.id,
      firstName: character.firstName,
      lastName: character.lastName,
      description: character.description,
      primaryClass: character.primaryClass,
    } as CharacterModel;
  });
}
