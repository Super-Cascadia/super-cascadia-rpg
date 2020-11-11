export async function getCharacter(id: number) {
  const response = await fetch(`/characters/${id}`);

  return await response.json();
}
