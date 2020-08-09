export default async function deleteItem(id: number) {
  return await fetch(`/items${id}`, {
    method: "DELETE",
  });
}
