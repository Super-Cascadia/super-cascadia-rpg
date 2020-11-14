export async function getCharacterInventory(id: number) {
  const response = await fetch(`/characters/${id}/inventory`);

  return await response.json();
}
