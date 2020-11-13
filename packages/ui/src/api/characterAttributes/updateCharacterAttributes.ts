import { CharacterAttributes } from "@super-cascadia-rpg/api";

export default async function updateCharacterAttributes(
  id: number,
  data: CharacterAttributes
) {
  const body = JSON.stringify(data);

  return await fetch(`/characterAttributes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
