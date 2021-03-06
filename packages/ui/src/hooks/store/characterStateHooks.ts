import {
  CharacterAttributes,
  CharacterWithAttributes,
  CharacterInventory,
} from "@super-cascadia-rpg/api";
import { CharacterEquipmentExpanded } from "@super-cascadia-rpg/api/build/src/handlers/characters/characterEquipment/util";

export interface CharacterEditState {
  character: CharacterWithAttributes;
}
export type CharacterStateHook = [CharacterEditState, (data: any) => void];

export type CharacterInventoryState = CharacterInventory[];
export type CharacterInventoryStateHook = [
  CharacterInventoryState,
  (data: any) => void
];

export type CharacterEquipmentState = CharacterEquipmentExpanded;
export type CharacterEquipmentStateHook = [
  CharacterEquipmentState,
  (data: any) => void
];

export interface CharacterAttributesState {
  attributes: CharacterAttributes;
}
export type CharacterAttributesStateHook = [
  CharacterAttributesState,
  (data: any) => void
];
