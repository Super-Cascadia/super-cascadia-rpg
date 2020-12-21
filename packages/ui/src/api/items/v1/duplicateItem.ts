export default async function duplicateItem(id: number) {
  return await fetch(`/items/${id}/duplicate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
