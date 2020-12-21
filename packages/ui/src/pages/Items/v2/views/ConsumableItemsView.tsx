import React, { useEffect, useState } from "react";
import fetchIconAssetDataHook from "../../../../hooks/api/assets/fetchIconAssetDataHook";
import { BasicConsumableItem } from "@super-cascadia-rpg/api";

export type ConsumableItemsStateHook = [
  BasicConsumableItem[],
  (data: any) => void
];

export default function ConsumableItemsView() {
  const [data, setData]: ConsumableItemsStateHook = useState(
    {} as BasicConsumableItem[]
  );
  // @ts-ignore
  useEffect(fetchIconAssetDataHook(setData), []);

  return <div></div>;
}
