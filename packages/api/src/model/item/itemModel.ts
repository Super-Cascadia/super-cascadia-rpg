export enum ItemType {
    FOOD,
    WEAPON,
    ARMOR,
    ACCESSORY,
    KEY_ITEM,
}

export interface Item {
    id: number;
    name: string;
    value: number;
    description: string;
    type: ItemType
}
