export async function getCharacterEquipment(id: number) {
  const response = await fetch(`/characters/${id}/equipment`);

  return await response.json();
}
