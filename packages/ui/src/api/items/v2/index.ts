import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";

function getUrl(id?: number) {
  if (id) {
    return `/items/v2/consumable/${id}`;
  }

  return `/items/v2/consumable`;
}

export async function getAllConsumableItems() {
  const response = await fetch(getUrl());

  return await response.json();
}

export async function updateConsumableItem(
  id: number,
  data: BasicConsumableItem
) {
  const body = JSON.stringify(data);

  return await fetch(getUrl(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}

export async function getAllArmorItems() {
  const response = await fetch(`/items/v2/armor`);

  return await response.json();
}

export async function getAllWeaponItems() {
  const response = await fetch(`/items/v2/weapon`);

  return await response.json();
}
