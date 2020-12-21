import { ITEM_GRID_TABS } from "../../../pages/Items/v1/ItemGrid/ItemGrid";
import { getItemTypeIdByTabName } from "../../../util/itemType";
import { Item } from "@super-cascadia-rpg/api/build/src/db/entity/items/v1/Item";

function getItemTypeFilterUrl(type: ITEM_GRID_TABS) {
  return `/items?type=${getItemTypeIdByTabName(type)}`;
}

export async function getItems(type: ITEM_GRID_TABS): Promise<Item[]> {
  const requestUrl =
    type !== ITEM_GRID_TABS.ALL ? getItemTypeFilterUrl(type) : `/items`;
  const response = await fetch(requestUrl);
  return await response.json();
}
