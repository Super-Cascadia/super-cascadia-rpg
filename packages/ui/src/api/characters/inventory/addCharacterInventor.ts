export async function addCharacterInventory(
  characterId: number,
  itemId: number
) {
  const body = JSON.stringify({
    itemId: itemId,
  });

  return await fetch(`/characters/${characterId}/inventory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
