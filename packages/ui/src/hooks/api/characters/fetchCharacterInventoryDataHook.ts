import { getCharacterInventory } from "../../../api/characters/getCharacterInventory";

export default function getEffect(id: number, setData: (data: any) => void) {
  return () => {
    async function fetchData(id: number) {
      const characterInventory = await getCharacterInventory(id);

      setData(characterInventory);
    }

    fetchData(id);
  };
}
