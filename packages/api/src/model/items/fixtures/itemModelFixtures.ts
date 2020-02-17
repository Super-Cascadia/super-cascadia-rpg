import {Armor, ArmorType, Item, ItemType, Weapon, WeaponType} from "../itemModel";

export const cheese: Item = {
    id: 1,
    name: 'Cheese',
    value: 123,
    description: "Description",
    type: ItemType.FOOD
};

export const ironSword: Weapon = {
    id: 2,
    name: 'Iron Sword',
    value: 1000,
    description: "Description",
    type: ItemType.WEAPON,
    weaponType: WeaponType.SWORD
};

export const ironBracers: Armor = {
    id: 2,
    name: 'Iron Sword',
    value: 1000,
    description: "Description",
    type: ItemType.ARMOR,
    armorType: ArmorType.ARMS
};
