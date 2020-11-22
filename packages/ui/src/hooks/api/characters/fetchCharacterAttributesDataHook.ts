import { getCharacterAttributes } from "../../../api/characters/attributes/getCharacterAttributes";

export default function getEffect(id: number, setData: (data: any) => void) {
  return () => {
    async function fetchData(id: number) {
      const attributes = await getCharacterAttributes(id);

      setData({
        attributes,
      });
    }

    fetchData(id);
  };
}
