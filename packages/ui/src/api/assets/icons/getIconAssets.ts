import { IconAsset } from "@super-cascadia-rpg/api/src/db/entity/assets/icons/IconAsset";

function getUrl(id?: number) {
  if (id) {
    return `/assets/icon/${id}`;
  }

  return `/assets/icon`;
}

export async function getIconAssets() {
  const response = await fetch(getUrl());

  return await response.json();
}

export async function createIconAsset(data: IconAsset) {
  const body = JSON.stringify(data);

  return await fetch(getUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}

export async function updateIconAsset(id: number, data: IconAsset) {
  const body = JSON.stringify(data);

  return await fetch(getUrl(id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
