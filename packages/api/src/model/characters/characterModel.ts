import { CharacterClassId } from "../characterClass/characterClassModel";
import { Character } from "../../db/entity/characters/Character";

export interface CharacterAttributes {
  id: number;
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
  attributes: CharacterAttributes;
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
