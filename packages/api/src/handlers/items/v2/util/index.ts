import { BasicWeaponItem } from "../../../../db/entity/items/v2/equippables/BasicWeaponItem";
import { IconAsset } from "../../../../db/entity/assets/icons/IconAsset";

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
