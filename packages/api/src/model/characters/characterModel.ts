import { Item } from '../items/itemModel';
import { CharacterClass } from '../characterClass/characterClassModel';

export interface CharacterSkills {
    id: 1;
    name: string;
    description: string;
}

export interface CharacterAttributes {
    strength: number;
    dexterity: number;
    constitution: number;
    stamina: number;
}

export interface CharacterEquipment {
    hand: Item;
    head: Item;
    chest: Item;
    arms: Item;
    legs: Item;
    feet: Item;
}

export interface Character {
    id: number,
    name: string;
    description: string;
    level: number;
    experience: number;
    class: CharacterClass;
    skills: CharacterSkills[]
    attributes: CharacterAttributes;
    equipment: CharacterEquipment;
    items: Item[];
}
