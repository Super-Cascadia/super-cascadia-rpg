import { ItemType } from '@super-cascadia-rpg/api';

export const getItemTypeNameById = (id: number) => {
  switch (id) {
    case ItemType.FOOD:
      return 'Food'
    case ItemType.WEAPON:
      return 'Weapon'
    case ItemType.ARMOR:
      return 'Armor'
    case ItemType.ACCESSORY:
      return 'Accessory'
    case ItemType.KEY_ITEM:
      return 'Key Item'
  }
}