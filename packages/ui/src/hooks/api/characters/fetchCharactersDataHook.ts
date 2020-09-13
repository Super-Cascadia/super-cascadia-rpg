export default function getEffect(
  setCharactersDataState: (data: any) => void,
  setLoadingState: (loading: boolean) => void
) {
  return () => {
    async function fetchCharacterData() {
      const requestUrl = `/characters`;
      const response = await fetch(requestUrl);
      const characters = await response.json();

      setCharactersDataState(characters);
      setLoadingState(false);
    }

    fetchCharacterData();
  };
}
