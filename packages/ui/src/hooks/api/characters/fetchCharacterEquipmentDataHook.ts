import { getCharacterEquipment } from "../../../api/characters/equipment/getCharacterEquipment";

export default function getEffect(id: number, setData: (data: any) => void) {
  return () => {
    async function fetchData(id: number) {
      const characterEquipment = await getCharacterEquipment(id);

      setData(characterEquipment);
    }

    fetchData(id);
  };
}
