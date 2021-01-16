import { BasicWeaponItem } from "../../../../db/entity/items/v2/equippables/BasicWeaponItem";
import { IconAsset } from "../../../../db/entity/assets/icons/IconAsset";
import { BasicConsumableItem } from "../../../../db/entity/items/v2/consumables/BasicConsumableItem";

export function prepareUpdateBasicWeaponItem(
  item: BasicWeaponItem
): BasicWeaponItem {
  const iconAsset = new IconAsset();
  iconAsset.id = item.iconAsset.id;

  return {
    ...item,
    iconAsset,
  };
}

export function prepareUpdateBasicConsumableItem(
  item: BasicConsumableItem
): BasicConsumableItem {
  const iconAsset = new IconAsset();
  iconAsset.id = item.iconAsset.id;

  return {
    ...item,
    iconAsset,
  };
}
