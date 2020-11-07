import { SelectOption } from "../../../components/forms/SelectInput";
import { ItemType } from "@super-cascadia-rpg/api";

export const itemTypeOptions: SelectOption[] = [
  {
    id: ItemType.FOOD,
    label: "Food",
  },
  {
    id: ItemType.WEAPON,
    label: "Weapon",
  },
  {
    id: ItemType.ACCESSORY,
    label: "Accessory",
  },
  {
    id: ItemType.KEY_ITEM,
    label: "Key Item",
  },
  {
    id: ItemType.ARMOR,
    label: "Armor",
  },
];
