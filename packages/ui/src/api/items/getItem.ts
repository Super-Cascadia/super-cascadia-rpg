export async function getItem(id: number) {
  const response = await fetch(`/items/${id}`);

  return await response.json();
}
