export default async function deleteCharacterInventory(
  characterId: number,
  inventoryId: number
) {
  return await fetch(`/characters/${characterId}/inventory/${inventoryId}`, {
    method: "DELETE",
  });
}
