import { ItemType } from "@super-cascadia-rpg/api";
import { ITEM_GRID_TABS } from "../pages/Items/v1/ItemGrid/ItemGrid";

export const getItemTypeNameById = (id: number) => {
  switch (id) {
    case ItemType.FOOD:
      return "Food";
    case ItemType.WEAPON:
      return "Weapon";
    case ItemType.ARMOR:
      return "Armor";
    case ItemType.ACCESSORY:
      return "Accessory";
    case ItemType.KEY_ITEM:
      return "Key Item";
  }
};

export function getItemTypeIdByTabName(type: ITEM_GRID_TABS): ItemType {
  switch (type) {
    case ITEM_GRID_TABS.FOOD:
      return ItemType.FOOD;
    case ITEM_GRID_TABS.WEAPON:
      return ItemType.WEAPON;
    case ITEM_GRID_TABS.ARMOR:
      return ItemType.ARMOR;
    case ITEM_GRID_TABS.ACCESSORY:
      return ItemType.ACCESSORY;
    case ITEM_GRID_TABS.KEY_ITEM:
      return ItemType.KEY_ITEM;
    default:
      return ItemType.KEY_ITEM;
  }
}
