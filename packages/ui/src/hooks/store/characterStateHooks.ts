import {
  CharacterAttributes,
  CharacterWithAttributes,
} from "@super-cascadia-rpg/api";
import { CharacterInventory } from "@super-cascadia-rpg/api/build/src/db/entity/CharacterInventory";
import { CharacterEquipment } from "@super-cascadia-rpg/api/build/src/db/entity/CharacterEquipment";

export interface CharacterEditState {
  character: CharacterWithAttributes;
}
export type CharacterStateHook = [CharacterEditState, (data: any) => void];

export type CharacterInventoryState = CharacterInventory[];
export type CharacterInventoryStateHook = [
  CharacterInventoryState,
  (data: any) => void
];

export type CharacterEquipmentState = CharacterEquipment;
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
