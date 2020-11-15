import { ITEM_GRID_TABS } from "../../pages/Items/ItemGrid/ItemGrid";
import { getItemTypeIdByTabName } from "../../util/itemType";
import { Item } from "@super-cascadia-rpg/api";

function getItemTypeFilterUrl(type: ITEM_GRID_TABS) {
  return `/items?type=${getItemTypeIdByTabName(type)}`;
}

export async function getItems(type: ITEM_GRID_TABS): Promise<Item[]> {
  const requestUrl =
    type !== ITEM_GRID_TABS.ALL ? getItemTypeFilterUrl(type) : `/items`;
  const response = await fetch(requestUrl);
  return await response.json();
}
