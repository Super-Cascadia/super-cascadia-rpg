export enum ItemType {
    FOOD,
    WEAPON,
    ARMOR,
    ACCESSORY,
    KEY_ITEM,
}

export interface ItemModel {
    id: number;
    name: string;
    value: number;
    description: string;
    type: ItemType
}

export enum WeaponType {
    SWORD,
    KNIFE,
    STAFF,
    CROSSBOW,
    FIST,
}

export enum ArmorType {
    CHEST,
    ARMS,
    LEGS,
    BOOTS,
    HEAD
}

export enum AccessoryType {
    RING,
    PENDANT,
    BAG,
    TOOL,
}

export enum KeyItemType {
    KEY,
    TECHNOLOGY,
}

export interface Weapon extends ItemModel {
    type: ItemType.WEAPON;
    weaponType: WeaponType;
}

export interface Armor extends ItemModel {
    type: ItemType.ARMOR;
    armorType: ArmorType;
}

export interface Accessory extends ItemModel {
    type: ItemType.ACCESSORY;
    accessoryType: AccessoryType;
}

export interface KeyItem extends ItemModel {
    type: ItemType.KEY_ITEM;
    keyItemType: KeyItemType;
}
