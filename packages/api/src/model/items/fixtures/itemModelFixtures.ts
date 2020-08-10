import {
  Armor,
  ArmorType,
  ItemModel,
  ItemType,
  Weapon,
  WeaponType,
} from "../itemModel";

export const cheese: ItemModel = {
  id: 1,
  name: "Cheese",
  description: "Description",
  type: ItemType.FOOD,
};

export const ironSword: Weapon = {
  id: 2,
  name: "Iron Sword",
  description: "Description",
  type: ItemType.WEAPON,
  weaponType: WeaponType.SWORD,
};

export const ironBracers: Armor = {
  id: 2,
  name: "Iron Sword",
  description: "Description",
  type: ItemType.ARMOR,
  armorType: ArmorType.ARMS,
};