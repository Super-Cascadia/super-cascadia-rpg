export default async function deleteCharacterInventory(inventoryId: number) {
  return await fetch(`/characterInventory/${inventoryId}`, {
    method: "DELETE",
  });
}
