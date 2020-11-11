import { getCharacter } from "../../../api/characters/getCharacter";

interface Options {
  id: number;
  includeAttributes?: boolean;
}

export default function getEffect(
  { id, includeAttributes }: Options,
  setData: (data: any) => void
) {
  return () => {
    async function fetchData(id: number) {
      const character = await getCharacter(id, includeAttributes);

      setData({
        character,
      });
    }

    fetchData(id);
  };
}
