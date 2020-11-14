import {
  CharacterAttributes,
  CharacterWithAttributes,
} from "@super-cascadia-rpg/api";
import { CharacterInventory } from "@super-cascadia-rpg/api/build/src/db/entity/CharacterInventory";

export interface CharacterEditState {
  character: CharacterWithAttributes;
}

export type CharacterInventoryState = CharacterInventory[];

export interface CharacterAttributesState {
  characterAttributes: CharacterAttributes;
}

export type CharacterStateHook = [CharacterEditState, (data: any) => void];
export type CharacterInventoryStateHook = [
  CharacterInventoryState,
  (data: any) => void
];

export type CharacterAttributesStateHook = [
  CharacterAttributesState,
  (data: any) => void
];
