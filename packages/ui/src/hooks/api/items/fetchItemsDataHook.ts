import { ITEM_GRID_TABS } from "../../../pages/Items/ItemGrid";
import { ItemType } from "@super-cascadia-rpg/api";

export function getItemTypeID(type: ITEM_GRID_TABS): ItemType {
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

export default function getEffect(
  type: ITEM_GRID_TABS,
  setData: (data: any) => void
) {
  return () => {
    async function fetchData() {
      const requestUrl =
        type === ITEM_GRID_TABS.ALL
          ? `/items`
          : `/items?type=${getItemTypeID(type)}`;
      const response = await fetch(requestUrl);
      const items = await response.json();

      setData({
        items,
      });
    }

    fetchData();
  };
}
