import { ItemModel } from "../items/itemModel";
import {
  CharacterClass,
  CharacterClassId,
} from "../characterClass/characterClassModel";

export interface CharacterSkills {
  id: 1;
  name: string;
  description: string;
}

export interface CharacterEquipment {
  hand: ItemModel;
  head: ItemModel;
  chest: ItemModel;
  arms: ItemModel;
  legs: ItemModel;
  feet: ItemModel;
}

export interface CharacterAttributes {
  strength: number;
  dexterity: number;
  vitality: number;
  intelligence: number;
  mind: number;
  piety: number;
}

export interface CharacterWithAttributes extends CharacterModel {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  characterAttributes: CharacterAttributes;
}

export interface CharacterModel extends CharacterCreateModel {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  primaryClass: CharacterClassId;
}

export interface CharacterCreateModel {
  firstName: string;
  lastName: string;
  description: string;
  primaryClass: CharacterClassId;
}
