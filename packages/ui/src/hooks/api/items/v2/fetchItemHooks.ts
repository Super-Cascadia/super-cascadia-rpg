import { getAllConsumableItems } from "../../../../api/items/v2";

export function fetchAllItemsHook(setData: (data: any) => void) {
  return () => {
    async function fetchData() {
      const items = await getAllConsumableItems();

      setData(items);
    }

    return fetchData();
  };
}
