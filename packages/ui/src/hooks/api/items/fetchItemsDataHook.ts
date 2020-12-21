import { ITEM_GRID_TABS } from "../../../pages/Items/v1/ItemGrid/ItemGrid";
import { getItems } from "../../../api/items/getItems";

export default function getEffect(
  type: ITEM_GRID_TABS,
  setItemsState: (data: any) => void,
  setLoadingState: (loading: boolean) => void
) {
  return () => {
    async function fetchData() {
      const items = await getItems(type);

      setItemsState(items);
      setLoadingState(false);
    }

    fetchData();
  };
}
