import { getCharacterAttributes } from "../../../api/characters/getCharacterAttributes";

export default function getEffect(id: number, setData: (data: any) => void) {
  return () => {
    async function fetchData(id: number) {
      const characterAttributes = await getCharacterAttributes(id);

      setData({
        characterAttributes,
      });
    }

    fetchData(id);
  };
}
