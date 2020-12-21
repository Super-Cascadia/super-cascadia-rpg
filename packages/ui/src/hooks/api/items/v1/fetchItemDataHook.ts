import { getItem } from "../../../../api/items/getItem";

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
