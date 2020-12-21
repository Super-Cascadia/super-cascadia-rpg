export async function getAllConsumableItems() {
  const response = await fetch(`/items/v2/consumable`);

  return await response.json();
}

export async function getAllArmorItems() {
  const response = await fetch(`/items/v2/armor`);

  return await response.json();
}

export async function getAllWeaponItems() {
  const response = await fetch(`/items/v2/weapon`);

  return await response.json();
}
