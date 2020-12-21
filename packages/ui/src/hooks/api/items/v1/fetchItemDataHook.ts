import { getItem } from "../../../../api/items/v1/getItem";

export default function getEffect(id: number, setData: (data: any) => void) {
  return () => {
    async function fetchData(id: number) {
      const item = await getItem(id);

      setData({
        item,
      });
    }

    fetchData(id);
  };
}
