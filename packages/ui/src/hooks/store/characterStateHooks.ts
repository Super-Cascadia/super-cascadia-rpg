import {
  CharacterAttributes,
  CharacterWithAttributes,
} from "@super-cascadia-rpg/api";

export interface CharacterEditState {
  character: CharacterWithAttributes;
}

export interface CharacterAttributesState {
  characterAttributes: CharacterAttributes;
}

export type CharacterStateHook = [CharacterEditState, (data: any) => void];
export type CharacterAttributesStateHook = [
  CharacterAttributesState,
  (data: any) => void
];
