export default async function updateCharacterEquipment(
  characterId: number,
  equipmentId: number,
  inventoryId: number,
  equipmentLocation: string
) {
  const body = JSON.stringify({
    inventoryId,
    equipmentLocation,
  });

  return await fetch(`/characters/${characterId}/equipment`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
