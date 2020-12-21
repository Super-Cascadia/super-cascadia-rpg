import { Item } from "../../../../../db/src";
import { omit } from "lodash";

export default async function updateItem(data: Item) {
  const body = JSON.stringify(omit(data, "id"));

  console.info("request body", body);

  return await fetch(`/items/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
