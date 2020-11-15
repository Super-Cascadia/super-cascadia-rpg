export async function getCharacterAttributes(id: number) {
  const response = await fetch(`/characters/${id}/attributes`);

  return await response.json();
}
