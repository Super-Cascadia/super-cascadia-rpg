export default function getEffect(id: number, setData: (data: any) => void) {
  return () => {
    async function fetchData(id: number) {
      const response = await fetch(`/characters/${id}`);
      const character = await response.json();

      setData({
        character,
      });
    }

    fetchData(id);
  };
}
