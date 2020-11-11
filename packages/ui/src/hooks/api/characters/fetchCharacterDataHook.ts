import { getCharacter } from "../../../api/characters/getCharacter";

export default function getEffect(id: number, setData: (data: any) => void) {
  return () => {
    async function fetchData(id: number) {
      const character = await getCharacter(id);

      setData({
        character,
      });
    }

    fetchData(id);
  };
}
