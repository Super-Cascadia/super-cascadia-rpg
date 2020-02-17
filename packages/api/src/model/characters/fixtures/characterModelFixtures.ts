import {Character} from "../characterModel";
import {freeLancer} from "../../characterClass/fixture/characterClassModelFixtures";
import { Item } from 'src/model/items/itemModel';

export const crono: Character = {
    id: 1,
    name: 'Crono',
    description: 'A young man who is adept with swords',
    level: 1,
    experience: 0,
    class: freeLancer,
    skills: [],
    attributes: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        stamina: 0
    },
    equipment: {
        head: {} as Item,
        hand: {} as Item,
        chest: {} as Item,
        arms: {} as Item,
        legs: {} as Item,
        feet: {} as Item,
    },
    items: []
};
