import { Item } from "../../db/entity/Item";
import { ItemModel } from "../../model/items/itemModel";
import { map } from "lodash";

export function mapItemToItemModel(items: Item[]): ItemModel[] {
  return map(items, (item: Item) => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      icon: item.icon,
      type: item.type,
    } as ItemModel;
  });
}
