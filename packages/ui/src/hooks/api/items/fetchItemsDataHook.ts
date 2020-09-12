import { ITEM_GRID_TABS } from "../../../pages/Items/ItemGrid/ItemGrid";
import { getItemTypeIdByTabName } from "../../../util/itemType";

export default function getEffect(
  type: ITEM_GRID_TABS,
  setItemsState: (data: any) => void,
  setLoadingState: (loading: boolean) => void
) {
  return () => {
    async function fetchData() {
      const requestUrl =
        type === ITEM_GRID_TABS.ALL
          ? `/items`
          : `/items?type=${getItemTypeIdByTabName(type)}`;
      const response = await fetch(requestUrl);
      const items = await response.json();

      setItemsState(items);
      setLoadingState(false);
    }

    fetchData();
  };
}
