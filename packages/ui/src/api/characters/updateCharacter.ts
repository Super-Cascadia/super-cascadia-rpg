import { omit } from "lodash";
import { CharacterModel } from "@super-cascadia-rpg/api";

export default async function updateCharacter(data: CharacterModel) {
  const body = JSON.stringify(omit(data, "id"));

  console.info("request body", body);

  return await fetch(`/characters/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
