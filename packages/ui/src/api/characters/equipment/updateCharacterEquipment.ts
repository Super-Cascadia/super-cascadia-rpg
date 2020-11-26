export async function updateCharacterEquipment(
  characterId: number,
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

export async function removeCharacterEquipment(
  characterId: number,
  equipmentLocation: string
) {
  const body = JSON.stringify({
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
