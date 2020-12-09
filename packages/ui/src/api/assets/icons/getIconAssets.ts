import { IconAsset } from "@super-cascadia-rpg/api/build/src/db/entity/assets/icons/IconAsset";

function getUrl() {
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

export async function updateIconAsset(data: IconAsset) {
  const body = JSON.stringify(data);

  return await fetch(getUrl(), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
